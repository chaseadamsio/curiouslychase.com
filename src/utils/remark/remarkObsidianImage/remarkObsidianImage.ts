// @ts-nocheck
// I didn't want to deal with typing this file, it may come back to haunt me
import { visit } from "unist-util-visit";

export const EMBED_LINK_REGEX = /!\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€_! ]+)\]\]/g;

const plugin =
  (options = {}) =>
  (tree) => {
    visit(tree, "text", (node, idx, parent) => {
      if (node.value.match(EMBED_LINK_REGEX)) {
        const result = EMBED_LINK_REGEX.exec(node.value);
        /** @type {Image} */
        const image = {
          type: "image",
          url: `/img/notes/${result[1]}`,
          title: null,
          alt: "",
          position: node.position,
        };

        parent.children.splice(idx, 1, image);
      }

      return node;
    });
  };

export default plugin;
