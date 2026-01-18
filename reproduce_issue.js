
const fs = require('fs');
const path = require('path');

const ashaPath = '/Users/curiosita/dev/lenny/web/content/episodes/asha-sharma/analysis.md';
const content = fs.readFileSync(ashaPath, 'utf8');

console.log("--- Content Snippet ---");
const guestIntroSection = content.match(/## 🎤 嘉宾介绍\s*([\s\S]*?)(?:\n---|(?:\n##\s)|$)/);
if (guestIntroSection) {
    const sectionContent = guestIntroSection[1];
    console.log(sectionContent.trim());
    console.log("--- End Snippet ---");

    const twitterMatch = sectionContent.match(/(?:Twitter\/X|Twitter|Twitter \/ X)[:：]\s*\[.*?\]\((.*?)\)/i);
    console.log("Twitter Match:", twitterMatch ? twitterMatch[1] : "NULL");

    const linkedinMatch = sectionContent.match(/LinkedIn[:：]\s*\[.*?\]\((.*?)\)/i);
    console.log("LinkedIn Match:", linkedinMatch ? linkedinMatch[1] : "NULL");
} else {
    console.log("Guest Intro Section NOT FOUND");
}
