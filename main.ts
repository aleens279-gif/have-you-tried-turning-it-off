// Have You Tried Turning It Off? — one line out to /output/entry.txt
// Limit is 199 chars; this line is 127. No trailing newline on the file.
import { mkdirSync, writeFileSync } from "node:fs";

// Cut mid-sentence so every piece stays short; the join adds the spaces.
const PARTS = [
  "Have you tried turning it",
  "off and on again? Perfect —",
  "now do the same to your",
  "expectations, and I'll mark",
  "this ticket resolved.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
