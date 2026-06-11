const fs = require('fs');
const path = require('path');

const API_KEY = process.env.FOOTBALL_DATA_API_KEY;
// 2000 is the competition ID for the FIFA World Cup on football-data.org
// Fetching all matches (FINISHED, SCHEDULED, TIMED, IN_PLAY, PAUSED)
const API_URL = `https://api.football-data.org/v4/competitions/2000/matches?_buster=${Date.now()}`;

async function fetchSchedule() {
    if (!API_KEY) {
        console.error('Error: FOOTBALL_DATA_API_KEY environment variable is not set.');
        // We do not exit(1) immediately if we want to allow tests without key, 
        // but for GitHub actions it's fine.
        process.exit(1);
    }

    try {
        console.log(`Fetching matches from ${API_URL}...`);
        const response = await fetch(API_URL, {
            headers: {
                'X-Auth-Token': API_KEY
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API returned status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        
        // 1. Upcoming Matches
        const upcoming = (data.matches || []).filter(m => m.status === 'SCHEDULED' || m.status === 'TIMED');
        const upcomingMatches = upcoming.map(match => {
            return {
                date: match.utcDate,
                homeTeam: match.homeTeam?.name || 'TBD',
                awayTeam: match.awayTeam?.name || 'TBD'
            };
        });

        const upcomingPath = path.join(__dirname, 'upcoming_matches.json');
        fs.writeFileSync(upcomingPath, JSON.stringify(upcomingMatches, null, 2), 'utf-8');
        console.log(`Successfully saved ${upcomingMatches.length} upcoming matches.`);

        // 2. Played Matches (Finished)
        const finished = (data.matches || []).filter(m => m.status === 'FINISHED');
        const playedMatches = finished.map(match => {
            // Reglement: Score na 120 minuten telt. Penalty's tellen als gelijkspel.
            // football-data.org 'fullTime' bevat de score inclusief eventuele extra time (maar excl. penalty's). In v4 is er ook 'regularTime'.
            console.log(`Scores API voor ${match.homeTeam?.name}:`, JSON.stringify(match.score));
            const homeScore = match.score?.fullTime?.home ?? match.score?.regularTime?.home ?? 0;
            const awayScore = match.score?.fullTime?.away ?? match.score?.regularTime?.away ?? 0;

            return {
                date: match.utcDate,
                thuis: match.homeTeam?.name || 'Onbekend',
                uit: match.awayTeam?.name || 'Onbekend',
                goalsThuis: homeScore,
                goalsUit: awayScore
            };
        });

        const playedPath = path.join(__dirname, 'played_matches.json');
        fs.writeFileSync(playedPath, JSON.stringify(playedMatches, null, 2), 'utf-8');
        console.log(`Successfully saved ${playedMatches.length} played matches.`);

    } catch (error) {
        console.error('Failed to fetch schedule:', error.message);
        process.exit(1);
    }
}

fetchSchedule();
