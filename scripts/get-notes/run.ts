#!/usr/bin/env ts-node

import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import os from "os";
import slugify from "slugify";

const EMBED_LINK_REGEX = /!\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€_! ]+)\]\]/g;

const notesDir = `${os.homedir}/vault`;

const imagesDir = `${notesDir}/01 - Meta/03 - Media`;

const copied = {
  notes: 0,
  images: 0,
};

async function getDirContents(directory: string) {
  const contents = fs.readdirSync(directory);

  for (const filename of contents) {
    const filepath = `${directory}/${filename}`;
    const filestat = fs.statSync(filepath);

    if (filestat.isDirectory()) {
      getDirContents(filepath);
    } else if (filepath.match(/\.mdx?/)) {
      const content = fs.readFileSync(filepath, "utf-8");
      const result = matter(content);

      if (
        !(
          result.data.status === "Published" ||
          result.data.status === "published"
        )
      ) {
        continue;
      }

      if (result.data.liveDate === null) {
        delete result.data.liveDate;
      }

      if (result.data.status) {
        if (result.data.liveDate) {
          if (result.data.liveDate instanceof Date) {
            result.data.pubDate = format(result.data.liveDate, "yyyy-MM-dd");
          } else {
            result.data.pubDate = format(
              parseISO(result.data.liveDate),
              "yyyy-MM-dd"
            );
          }
        } else {
          result.data.pubDate = format(filestat.birthtime, "yyyy-MM-dd");
        }

        result.data.updatedDate =
          result.data.modified ??
          result.data.pubDate ??
          format(filestat.mtime, "yyyy-MM-dd");

        if (result.data.pubDate === result.data.updatedDate) {
          delete result.data.updatedDate;
        }

        const foundEmbed = content.match(EMBED_LINK_REGEX);

        if (foundEmbed?.length) {
          for (const image of foundEmbed) {
            const sanitizedImageName = image
              .replace(/^\!\[\[/, "")
              .replace(/\]\]$/, "");
            const path = `${imagesDir}/${sanitizedImageName}`;
            const file = fs.readFileSync(path);
            fs.writeFileSync(
              `${process.cwd()}/public/img/notes/${sanitizedImageName}`,
              file
            );
            copied.images++;
          }
        }

        const splitPath = filepath.split("/");
        const filename = splitPath.pop();
        if (!filename) {
          throw new Error(`unable to get filename from ${filepath}`);
        }

        if (!result.data.title) {
          result.data.title = filename.replace(/\.mdx?/, "");
        }

        result.data.slug = slugify(filename.replace(/\.mdx?/, ""), {
          lower: true,
          remove: /[\.\?"',\(\))]*/,
        });

        const folderPath = `${process.cwd()}/content/posts`;
        fs.mkdirSync(folderPath, { recursive: true });
        const newPath = slugify(filename, {
          lower: true,
          remove: /[\?"',\(\))]*/,
        });

        fs.writeFileSync(
          `${folderPath}/${result.data.slug}.md`,
          matter.stringify(result.content, result.data)
        );
        copied.notes++;
      }
    }
  }
}

async function main() {
  await getDirContents(notesDir);
  console.log(`Notes copied: ${copied.notes}`);
  console.log(`Images copied: ${copied.images}`);
}

main();
