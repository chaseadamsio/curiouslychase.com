import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export const OnlineFrequent = () => {
  return (
    <>
      <p>
        I'm on almost all social media as <strong>@curiouslychase</strong>.
      </p>
      <ul className="p-0 m-0 list-none flex flex-col pt-6 mt-4 md:pt-0 md:flex-row gap-2">
        {frequentSocial.map((s) => (
          <li className="p-0 m-0">
            <Button
              asChild
              variant={"link"}
              className="text-blue-400 hover:text-magenta-500"
            >
              <a
                className="!no-underline flex gap-2 hover:font-bold"
                href={`${s.link}`}
              >
                {s.icon} {s.network}
              </a>
            </Button>
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
    icon: <Twitter width="20" />,
  },
  {
    network: "GitHub",
    username: "curiouslychase",
    link: "https://github.com/curiouslychase",
    type: "frequent",
    icon: <Github width="20" />,
  },
  {
    network: "YouTube",
    username: "curiouslychase",
    link: "https://www.youtube.com/@curiouslychase",
    type: "often",
    icon: <Youtube width="20" />,
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
    icon: <Linkedin width="20" />,
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
  icon: JSX.Element;
};

const frequentSocial = social.filter(
  (s) => s.type === "frequent" || s.type === "often"
);
