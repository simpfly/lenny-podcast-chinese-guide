
const fs = require('fs');
const path = require('path');

const episodesDir = path.join(__dirname, '../episodes');

function checkEpisodes() {
    if (!fs.existsSync(episodesDir)) {
        console.log("Episodes dir not found");
        return;
    }

    const guests = fs.readdirSync(episodesDir);
    let incompleteCount = 0;
    
    // Stats counters
    const stats = {
        tools: 0,
        toolParseFailures: 0,
        actionsClipboard: 0,
        actionsClapper: 0,
        scoresStar: 0,
        scoresChart: 0
    };

    guests.forEach(guest => {
        if (guest === '.DS_Store') return;
        const analysisPath = path.join(episodesDir, guest, 'analysis.md');
        
        if (!fs.existsSync(analysisPath)) {
            // console.log(`[Missing Analysis]: ${guest}`);
            return;
        }

        const content = fs.readFileSync(analysisPath, 'utf-8');
        const missing = [];

        // Check Tools Header & Parsing
        if (content.includes('## 🛠️ 提到的工具/资源')) {
            stats.tools++;
            
            // Check Tool Parsing Logic (Simulation)
            let toolCount = 0;
            const blocks = content.split(/\n(?=\*\*)/);
            blocks.forEach(block => {
                const mainLineMatch = block.match(/^\*\*(.*?)\*\*:\s*(.*)$/m);
                const urlMatch = block.match(/-\s*(?:链接|Link):\s*\[.*?\]\((.*?)\)/);

                if (mainLineMatch) {
                    const contentStr = mainLineMatch[2].trim();
                    if (contentStr) {
                        // Single Item
                        toolCount++;
                    } else {
                         // Group Header
                         const lines = block.split('\n').slice(1);
                         lines.forEach(line => {
                             const itemMatch = line.match(/-\s*\*\*(.*?)\*\*:\s*(.*?)(\[.*?\]\((.*?)\))?$/);
                             if (itemMatch) toolCount++;
                         });
                    }
                }
            });
            
            if (toolCount === 0) {
                 console.log(`[Tools Parse Failed] ${guest}`);
                 stats.toolParseFailures++;
            }

        } else {
            // missing.push('Tools');
        }

        // Check Actions
        if (content.includes('## 📋 行动建议')) stats.actionsClipboard++;
        else if (content.includes('## 🎬 核心行动指南')) stats.actionsClapper++;
        else missing.push('Actions');

        // Check Scores
        if (content.includes('## ⭐ 评分')) stats.scoresStar++;
        else if (content.includes('## 📊 评分')) stats.scoresChart++;
        else missing.push('Scores');

        if (missing.length > 0) {
            // console.log(`[Incomplete] ${guest}: Missing ${missing.join(', ')}`);
            incompleteCount++;
        }
    });

    console.log('\nStatistics:');
    console.log(`Total Episodes Reviewed: ${guests.length}`);
    console.log(`Tools Header Present: ${stats.tools}`);
    console.log(`Tools Parse FAILURES: ${stats.toolParseFailures}`);
    console.log(`Actions (📋): ${stats.actionsClipboard}`);
    console.log(`Actions (🎬): ${stats.actionsClapper}`);
    console.log(`Scores (⭐): ${stats.scoresStar}`);
    console.log(`Scores (📊): ${stats.scoresChart}`);
    console.log(`Total Incomplete (Values Missing): ${incompleteCount}`);
}

checkEpisodes();
