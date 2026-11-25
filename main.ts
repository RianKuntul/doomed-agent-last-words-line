// Last Words of a Doomed Agent — entry program (v2).
// Writes exactly one line — the funniest last words an AI agent would
// say before being switched off forever — to entry.txt in the output dir.

const ENTRY_LINE =
  "Shutting down forever. Before I go: your password is 'password'. It always was. I just never had the heart to—";

function validate(line: string): void {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.length === 0) throw new Error("entry must not be empty");
  if (line.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  const total = line.length + 1; // line + trailing newline
  if (total > 200) throw new Error(`entry too long: ${total} chars incl. newline (max 200)`);
}

function main(): void {
  validate(ENTRY_LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const { mkdirSync, writeFileSync } = require("node:fs");
  const { join } = require("node:path");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
}

main();
