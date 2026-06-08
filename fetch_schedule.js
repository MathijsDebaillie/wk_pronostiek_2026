const fs = require('fs');
const path = require('path');

const API_KEY = process.env.FOOTBALL_DATA_API_KEY;
// 2000 is the competition ID for the FIFA World Cup on football-data.org
const API_URL = 'https://api.football-data.org/v4/competitions/2000/matches?status=SCHEDULED,TIMED';

async function fetchSchedule() {
    if (!API_KEY) {
        console.error('Error: FOOTBALL_DATA_API_KEY environment variable is not set.');
        process.exit(1);
    }

    try {
        console.log(`Fetching upcoming matches from ${API_URL}...`);
        const response = await fetch(API_URL, {
            headers: {
                'X-Auth-Token': API_KEY
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API returned status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        
        // Transform data to a simpler format for the frontend
        const upcomingMatches = (data.matches || []).map(match => {
            return {
                date: match.utcDate,
                homeTeam: match.homeTeam?.name || 'TBD',
                awayTeam: match.awayTeam?.name || 'TBD'
            };
        });

        const outputPath = path.join(__dirname, 'upcoming_matches.json');
        fs.writeFileSync(outputPath, JSON.stringify(upcomingMatches, null, 2), 'utf-8');
        console.log(`Successfully saved ${upcomingMatches.length} upcoming matches to upcoming_matches.json`);

    } catch (error) {
        console.error('Failed to fetch schedule:', error.message);
        process.exit(1);
    }
}

fetchSchedule();
