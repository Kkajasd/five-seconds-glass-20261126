// Five Seconds to Explain the Glass — one-line entry writer (Node stdlib only).
// Writes the final entry line to <outDir>/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It was empty, it was hogging my sunbeam, and it gave me that look — I don't negotiate with glassware.";

const MIN_LEN = 1;
const MAX_LEN = 200;

function main(): void {
  const outDir =
    process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
  if (LINE.length < MIN_LEN || LINE.length > MAX_LEN) {
    throw new Error(
      `entry length ${LINE.length} is outside the ${MIN_LEN}-${MAX_LEN} character gate`,
    );
  }
  // Create the output dir if missing; never delete or replace it.
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
  console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
}

main();
