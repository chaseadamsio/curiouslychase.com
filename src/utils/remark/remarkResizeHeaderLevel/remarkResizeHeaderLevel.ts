// @ts-nocheck
// I didn't want to deal with typing this file, it may come back to haunt me
import { visit } from "unist-util-visit";

/**
 *
 * I like to write with # in my Markdown files but I know
 * they need to be increased by one level for it to be semantic
 * HTML
 */
const plugin =
  (options = {}) =>
  (tree) => {
    visit(tree, "heading", (node, idx, parent) => {
      parent.children.splice(idx, 1, { ...node, depth: node.depth + 1 });

      return node;
    });
  };

export default plugin;
