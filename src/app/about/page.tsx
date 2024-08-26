import { OnlineFrequent } from "@/components/Content/OnlineFrequent";
import { What } from "@/components/Content/What";
import { Metadata } from "next";
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Chase Adams",
    description: "About Chase Adams",
    alternates: {
      canonical: "/about",
    },
  };
}

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
          future of <s>decision making</s>{" "}
          <Link href="/about/purpose/magic">
            workflow automation with the magic of AI.
          </Link>
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
    <div className="about-page">
      <What />
      <OnlineFrequent />
      <WorkSection />
      <PlaySection />
    </div>
  );
}
