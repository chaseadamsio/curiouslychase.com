import { readdirSync, statSync } from "fs";

export async function getAllFiles(directory: string): Promise<Array<string>> {
  const contents = readdirSync(directory);

  let allFiles: Array<string> = [];

  for (const filename of contents) {
    const filepath = `${directory}/${filename}`;
    const filestat = statSync(filepath);

    if (filestat.isDirectory()) {
      const gatheredFiles = await getAllFiles(filepath);
      allFiles = allFiles.concat([...gatheredFiles]);
    } else if (filepath.match(/\.mdx?/)) {
      allFiles.push(filepath);
    }
  }

  return allFiles;
}
