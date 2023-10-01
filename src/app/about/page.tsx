import { OnlineFrequent } from "@/components/Content/OnlineFrequent";
import { What } from "@/components/Content/What";
import Link from "next/link";

const work = [
  {
    company: "Murmur",
    blurb: "Building the future of decision making.",
    link: "/posts/murmur",
  },
  {
    company: "Webflow",
    blurb: "Building the future of building software with no code.",
    link: "/posts/webflow",
  },
  {
    company: "Walmart Labs",
    blurb: "Building ecommerce at scale.",
    link: "/posts/walmart-labs",
  },
  {
    company: "Zappos",
    blurb: "Building the future of retail.",
    link: "/posts/zappos",
  },
];

const activities = [
  {
    activity: "Climbing",
    blurb:
      "Climbing is my favorite way to exercise, meet new people and level up my craft.",
  },
  {
    activity: "LEGO",
    blurb: "LEGO is my favorite way to get my creative energy flowing.",
  },
  {
    activity: "Doodling",
    blurb:
      "I love to communicate my ideas with doodles, scribbles, diagrams and arrows.",
  },
];

const WorkSection = () => (
  <main className="mt-8 max-w-5xl mx-auto">
    <div className="pb-4">
      <h2 className="uppercase my-0 text-3xl font-display">At Work</h2>
      <span className="block pt-4 lead">
        I've been building better software and better teams for 15 years.
      </span>
    </div>
    <section>
      <ul>
        {work.map((c) => (
          <li key={c.company}>
            <Link href={c.link}>{c.company}</Link>: {c.blurb}
          </li>
        ))}
      </ul>
    </section>
  </main>
);

const PlaySection = () => (
  <main className="mt-8 max-w-5xl mx-auto">
    <div className="pb-4">
      <h2 className="uppercase my-0 text-3xl font-display">At Play</h2>
    </div>
    <section>
      <ul>
        {activities.map((c) => (
          <li key={c.activity}>
            <strong>{c.activity}</strong>: {c.blurb}
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default function AboutPage() {
  return (
    <>
      <What />
      <OnlineFrequent />
      <WorkSection />
      <PlaySection />
    </>
  );
}
