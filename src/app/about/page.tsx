import { OnlineFrequent } from "@/components/Content/OnlineFrequent";
import { What } from "@/components/Content/What";
import Link from "next/link";

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
      <h2 className="uppercase my-0 text-3xl font-bold">At Work</h2>
      <span className="block pt-4 text-lg">
        I've been building better software and better teams for 15 years.
      </span>
    </div>
    <section>
      <ul>
        <li>
          <Link href="/posts/murmur-labs">Murmur Labs</Link>: Building the
          future of <s>decision making</s> AI visual programming.
        </li>
        <li>
          <Link href="/posts/webflow">Webflow</Link>: Building the future of
          building software with no code.
        </li>
        <li>
          <Link href="/posts/walmart-labs">Walmart Labs</Link>: Building
          ecommerce at scale.
        </li>
        <li>
          <Link href="/posts/zappos">Zappos</Link>: Building the future of
          retail.
        </li>
      </ul>
    </section>
  </main>
);

const PlaySection = () => (
  <main className="mt-8 max-w-5xl mx-auto">
    <div className="pb-4">
      <h2 className="uppercase my-0 text-3xl font-bold">At Play</h2>
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
    <div className="page">
      <What />
      <OnlineFrequent />
      <WorkSection />
      <PlaySection />
    </div>
  );
}
