export const OnlineFrequent = () => {
  return (
    <>
      <p>
        I'm on almost all social media as <strong>@curiouslychase</strong>
      </p>
      <ul className="p-0 m-0 list-none flex flex-col pt-4 md:pt-0 md:flex-row gap-2">
        {frequentSocial.map((s) => (
          <li className="md:after:content-['/'] after:last-of-type:content-['']">
            <a className="hover:font-bold" href={`${s.link}`}>
              {s.network}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

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

const frequentSocial = social.filter(
  (s) => s.type === "frequent" || s.type === "often"
);
