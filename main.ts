// Five Seconds to Explain the Glass — make.fun entry.
// Writes the one-sentence excuse a house cat gives in the five seconds
// after knocking a glass off the table. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It was empty, it was blocking my sunbeam, and it looked at me funny \u2014 I don't negotiate with glassware.";

// The grading sandbox provides /output; create it if missing, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
