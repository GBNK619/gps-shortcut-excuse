import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Technically the road exists — it just ends at a lake. I was giving you a shortcut to reflection.";

// Gate validation: the entry must be one line of plain text,
// 1-200 characters, and not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${line.length}`,
  );
}
if (!line.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} characters): ${line}`);
