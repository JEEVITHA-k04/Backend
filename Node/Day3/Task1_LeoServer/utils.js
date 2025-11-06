// utils.js
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export the absolute path to movies.txt
export const moviesFilePath = path.join(__dirname, "data", "movies.txt");

// helper: read movies file and return array of lines
export async function readMoviesFile() {
  const text = await fs.readFile(moviesFilePath, "utf8");
  // split into lines, filter empty lines, trim
  return text.split("\n").map(line => line.trim()).filter(line => line.length);
}
