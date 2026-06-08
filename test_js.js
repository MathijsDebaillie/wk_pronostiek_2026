const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dataJs = fs.readFileSync('data.js', 'utf8');

// Combine them into one string for evaluation
const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

try {
    window.eval(dataJs);
    
    // Extract script content from index.html
    const scriptMatch = html.match(/<script>\s*([\s\S]*?)\s*<\/script>/);
    if (scriptMatch) {
        window.eval(scriptMatch[1]);
        
        // Mock fetch
        window.fetch = async () => ({
            ok: true,
            json: async () => ([])
        });

        // Trigger DOMContentLoaded
        const event = document.createEvent('Event');
        event.initEvent('DOMContentLoaded', true, true);
        window.document.dispatchEvent(event);
        
        console.log("SUCCESS. leaderboard body innerHTML length: " + document.getElementById('leaderboard-body').innerHTML.length);
    } else {
        console.log("No script found");
    }
} catch(e) {
    console.log("ERROR:", e);
}
