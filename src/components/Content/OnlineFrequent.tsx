import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export const OnlineFrequent = () => {
  return (
    <main className="online-frequent mt-8 max-w-5xl mx-auto">
      <div className="pb-4">
        <h2 className="uppercase mb-4 my-0 text-3xl font-bold">Online</h2>
        <span className="block text-lg">
          I'm on almost all social media as <strong>@chaseadamsio</strong>.
        </span>
      </div>
      <section>
        <p></p>
        <ul className="p-0 m-0 list-none flex flex-col pt-6 mt-4 md:pt-0 md:flex-row gap-2">
          {frequentSocial.map((s) => (
            <li className="p-0 m-0">
              <Button
                asChild
                variant={"link"}
                className="text-purple-500 hover:text-purple-400 dark:text-purple-200 dark:hover:text-purple-100"
              >
                <a className="!no-underline flex gap-2" href={`${s.link}`}>
                  {s.icon} {s.network}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export const social = [
  {
    network: "Twitter",
    username: "chaseadamsio",
    link: "https://twitter.com/chaseadamsio",
    type: "frequent",
    icon: <Twitter width="20" />,
  },
  {
    network: "GitHub",
    username: "chaseadamsio",
    link: "https://github.com/chaseadamsio",
    type: "frequent",
    icon: <Github width="20" />,
  },
  {
    network: "YouTube",
    username: "chaseadamsio",
    link: "https://www.youtube.com/@chaseadamsio",
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
    username: "chaseadamsio",
    link: "https://www.linkedin.com/in/chaseadamsio",
    type: "often",
    icon: <Linkedin width="20" />,
  },
  {
    network: "Mastodon",
    username: "chaseadamsio@indieweb.social",
    link: "https://indieweb.social/@chaseadamsio",
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
    username: "chaseadamsio",
    link: "https://facebook.com/chaseadamsio",
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
