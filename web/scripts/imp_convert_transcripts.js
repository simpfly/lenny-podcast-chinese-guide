const fs = require("fs");
const path = require("path");

// Configuration
const TRANSCRIPTS_DIR = '/Users/curiosita/Downloads/Lenny\'s Podcast Transcripts Archive [public]';
const EPISODES_DIR = path.join(__dirname, '../content/episodes');

// Helper to normalize strings for slug comparison
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .trim()
    .replace(/\s+/g, "-");
}

// Main function
function convertTranscripts() {
  if (!fs.existsSync(TRANSCRIPTS_DIR)) {
    console.error(`Transcripts directory not found: ${TRANSCRIPTS_DIR}`);
    return;
  }
  
  // Get all episode directories (potential slugs) from the existing episodes folder
  const episodeDirs = fs.readdirSync(EPISODES_DIR).filter(file => {
    return fs.statSync(path.join(EPISODES_DIR, file)).isDirectory();
  });

  console.log(`Found ${episodeDirs.length} episode directories.`);

  // Get all transcript files
  const transcriptFiles = fs
    .readdirSync(TRANSCRIPTS_DIR)
    .filter((file) => file.endsWith(".txt"));
  console.log(`Found ${transcriptFiles.length} transcript files.`);

  let matchedCount = 0;
  let skippedCount = 0;

  transcriptFiles.forEach((file) => {
    const filename = path.parse(file).name;
    const fileSlug = toSlug(filename);

    // Try to find a matching episode slug
    // 1. Direct match
    let matchedSlug = episodeDirs.find((slug) => slug === fileSlug);

    // 2. Fallback: Check if slug is contained in filename or vice versa (be careful here)
    if (!matchedSlug) {
      // specific manual fix for common discrepancies if needed
      // e.g. "Ada Chen Rekhi" -> "ada-chen-rekhi" usually works with simple slugify
      // Try removing special chars from filename before slugifying?
      // Let's try to match against known slugs by checking if the slug is loosely part of the filename
      matchedSlug = episodeDirs.find((slug) => {
        const normalizedSlug = slug.replace(/-/g, " ");
        const normalizedFilename = filename.toLowerCase();
        return (
          normalizedFilename.includes(normalizedSlug) ||
          normalizedSlug.includes(normalizedFilename)
        );
      });
    }

    if (matchedSlug) {
      const srcPath = path.join(TRANSCRIPTS_DIR, file);
      
      // Create transcripts output directory: episodes/[slug]/transcripts/
      const transcriptDestDir = path.join(EPISODES_DIR, matchedSlug, 'transcripts');
      if (!fs.existsSync(transcriptDestDir)) {
          fs.mkdirSync(transcriptDestDir, { recursive: true });
      }

      const destPath = path.join(transcriptDestDir, 'transcript.md');

      const content = fs.readFileSync(srcPath, 'utf8');
      const markdownContent = convertToMarkdown(content);

      fs.writeFileSync(destPath, markdownContent);
      console.log(`[OK] Converted: "${file}" -> episodes/${matchedSlug}/transcripts/transcript.md`);
      matchedCount++;
    } else {
      console.warn(
        `[SKIP] Could not match episode for: "${file}" (Slugified: ${fileSlug})`,
      );
      skippedCount++;
    }
  });

  console.log(`\nConversion Complete.`);
  console.log(`Matched: ${matchedCount}`);
  console.log(`Skipped: ${skippedCount}`);
}

function convertToMarkdown(text) {
  const lines = text.split("\n");
  const processedLines = lines.map((line) => {
    // Match Speaker (Timestamp): or Speaker (Timestamp)
    // Regex: Start with non-whitespace, some text, then (timer), then optional colon
    const speakerMatch = line.match(/^(.+?)\s*\(\d{2}:\d{2}:\d{2}\):?/);

    if (speakerMatch) {
      // It's a speaker line, make it bold
      return `\n**${line.trim()}**\n`;
    } else {
      // Regular text
      return line;
    }
  });

  return processedLines.join("\n").trim();
}

convertTranscripts();
