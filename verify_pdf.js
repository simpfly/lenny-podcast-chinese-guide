
const fs = require('fs');
const path = require('path');

const slug = 'wes-kao-2-0';
// Simulating the app running in the 'web' directory
const cwd = process.cwd(); 
const CONTENT_DIR = path.join(cwd, 'content'); 
const pdfPath = path.join(CONTENT_DIR, 'pdf-bilingual', `${slug}.pdf`);

console.log('CWD:', cwd);
console.log('Checking PDF path:', pdfPath);

if (fs.existsSync(pdfPath)) {
    console.log('PDF exists! URL would be: /api/pdf/' + slug);
} else {
    console.log('PDF NOT found');
}
