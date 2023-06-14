// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://curiouslychase.com";

export const SITE_TITLE = "Chase Adams";
export const SITE_DESCRIPTION = "Chase Adams' personal website";

export const social = [
  {
    network: "Twitter",
    username: "curiouslychase",
    link: "https://twitter.com/curiouslychase",
    type: "frequent",
  },
  {
    network: "GitHub",
    username: "curiouslychase",
    link: "https://github.com/curiouslychase",
    type: "frequent",
  },
  {
    network: "YouTube",
    username: "curiouslychase",
    link: "https://www.youtube.com/@curiouslychase",
    type: "often",
  },
  {
    network: "Product Hunt",
    username: "chaseadamsio",
    link: "https://producthunt.com/chaseadamsio",
    type: "occasional",
  },
  {
    network: "LinkedIn",
    username: "curiouslychase",
    link: "https://www.linkedin.com/in/curiouslychase",
    type: "often",
  },
  {
    network: "Mastodon",
    username: "curiouslychase@indieweb.social",
    link: "https://indieweb.social/@curiouslychase",
    type: "occasional",
  },
  {
    network: "Reddit",
    username: "chaseadamsio",
    link: "https://www.reddit.com/user/chaseadamsio",
    type: "dormant",
  },
  {
    network: "Facebook",
    username: "curiouslychase",
    link: "https://facebook.com/curiouslychase",
    type: "occasional",
  },
] as Array<SocialNetwork>;

type SocialNetwork = {
  network: string;
  username: string;
  link: string;
  type: "frequent" | "often" | "occasional" | "dormant";
};
