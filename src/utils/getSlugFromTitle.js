import slugify from "slugify";

export function getSlugFromTitle(title) {
  return slugify(title, { lower: true, remove: /[\.\?"':,\(\))]*/ });
}
