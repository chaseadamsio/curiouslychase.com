export const getTitleFromPath = (path: string): string => {
  const filename = path.split("/").pop();
  if (!filename) {
    throw new Error(`unable to split path and get filename`);
  }

  return filename.replace(/\+/g, " ").replace(/\.mdx?$/, "");
};
