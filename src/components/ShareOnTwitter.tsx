import type { FC } from "preact/compat";
import React from "preact";

type ShareLinkProps = {
  content?: string;
  title: string;
  permalink: string;
};

export const ShareLinkOnTwitter: FC<ShareLinkProps> = ({
  content,
  title,
  permalink,
  children,
}) => {
  const handleClick = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    const left = (window.screen.width - 570) / 2;
    const top = (window.screen.height - 570) / 2;
    const params =
      `menubar=no,toolbar=no,status=no,width=570,height=570,top=` +
      top +
      `,left=` +
      left;

    const encodedURL = `url=${encodeURIComponent(permalink)}`;
    const username = `curiouslychase`;
    const via = `via=${username}`;
    const encodedContent = content
      ? `text=${content}&${via}`
      : `text=Check out ${encodeURIComponent(`"${title}"`)}&${via}`;

    const tweet = `${encodedContent}&${encodedURL}`;

    window.open(
      `https://twitter.com/intent/tweet?${tweet}`,
      `NewWindow`,
      params
    );
  };

  return (
    <a
      onClick={handleClick}
      href={`https://twitter.com/intent/tweet?=${permalink}&text=${title}`}
    >
      {children ?? "Share on Twitter"}
    </a>
  );
};
