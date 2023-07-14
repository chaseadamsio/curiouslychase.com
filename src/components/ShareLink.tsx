"use client";

import { getHostnameNaked } from "@/utils/getHostname";
import { usePathname } from "next/navigation";

import { FC, SyntheticEvent } from "react";

type ShareLinkProps = {
  title: string;
};

export const ShareLinkOnTwitter: FC<ShareLinkProps> = ({ title }) => {
  const siteUrl = getHostnameNaked();
  const pathname = usePathname();
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const left = (window.screen.width - 570) / 2;
    const top = (window.screen.height - 570) / 2;
    const params =
      `menubar=no,toolbar=no,status=no,width=570,height=570,top=` +
      top +
      `,left=` +
      left;

    const encodedURL = `url=${encodeURIComponent(url)}`;
    const encodedTitle = `text=Check out ${encodeURIComponent(`"${title}"`)}`;
    const via = "via=curiouslychase";

    window.open(
      `https://twitter.com/intent/tweet?${encodedTitle}&${encodedURL}&${via}`,
      `NewWindow`,
      params
    );
  };

  const url = `${siteUrl}${pathname}`;

  return (
    <a
      className="font-bold text-blue-700 dark:text-blue-300"
      onClick={handleClick}
      href={`https://twitter.com/intent/tweet?=${url}&text=${title}`}
    >
      Share on Twitter
    </a>
  );
};

export const ShareLinkOnLinkedIn: FC<ShareLinkProps> = () => {
  const siteUrl = getHostnameNaked();

  const pathname = usePathname();
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const left = (window.screen.width - 570) / 2;
    const top = (window.screen.height - 570) / 2;
    const params =
      `menubar=no,toolbar=no,status=no,width=570,height=570,top=` +
      top +
      `,left=` +
      left;

    const encodedURL = `url=${encodeURIComponent(url)}`;

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?${encodedURL}`,
      `NewWindow`,
      params
    );
  };

  const url = `${siteUrl}${pathname}`;
  return (
    <a
      onClick={handleClick}
      href={`https://www.linkedin.com/sharing/share-offsite/?=${url}`}
    >
      Share on LinkedIn
    </a>
  );
};
