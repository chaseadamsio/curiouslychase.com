import type { FC } from "preact/compat";
import Preact from "preact";

type ShareLinkProps = {
  title: string;
  permalink: string;
};

export const ShareLinkOnTwitter: FC<ShareLinkProps> = ({
  title,
  permalink,
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
    const encodedTitle = `text=Check out ${encodeURIComponent(`"${title}"`)}`;
    const via = "via=curiouslychase";

    window.open(
      `https://twitter.com/intent/tweet?${encodedTitle}&${encodedURL}&${via}`,
      `NewWindow`,
      params
    );
  };

  return (
    <a
      onClick={handleClick}
      href={`https://twitter.com/intent/tweet?=${permalink}&text=${title}`}
    >
      Share on Twitter
    </a>
  );
};
