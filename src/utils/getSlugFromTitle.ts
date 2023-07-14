import slugify from "slugify";

export function getSlugFromTitle(title: string) {
  return slugify(title, { lower: true, remove: /[\.\?"',\(\))]*/ });
}
