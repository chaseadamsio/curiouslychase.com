// @ts-nocheck
// I didn't want to deal with typing this file, it may come back to haunt me
import { visit } from "unist-util-visit";

const remarkObsidianEnhancedQuotesPlugin =
  (options = {}) =>
  (tree) => {
    visit(tree, "blockquote", (node, idx, parent) => {
      const children = [...node.children];
      const firstBlockQuoteChild = children.shift();

      const firstBlockQuoteChildChildren = [...firstBlockQuoteChild.children];
      const firstBlockQuoteChildChild = firstBlockQuoteChildChildren.shift();
      const quoteValue = firstBlockQuoteChildChild.value;
      const calloutRegex = /^\[\!(\w+)\](.*)$/gim;
      const match = calloutRegex.exec(quoteValue);

      if (match?.length) {
        firstBlockQuoteChildChild.value = quoteValue.replace(match[0], "");

        firstBlockQuoteChildChild.className = match[1].toLowerCase();

        firstBlockQuoteChild.children = [
          firstBlockQuoteChildChild,
          ...firstBlockQuoteChildChildren,
        ];

        const calloutType = match[1].toLowerCase();
        const calloutTitle = match[2];

        return Object.assign(node, {
          ...node,
          data: {
            hProperties: {
              className: `callout ${calloutType}`,
              calloutType,
              calloutTitle,
            },
          },
          children: [firstBlockQuoteChild, ...children],
        });
      }

      return node;
    });
  };

export default remarkObsidianEnhancedQuotesPlugin;
