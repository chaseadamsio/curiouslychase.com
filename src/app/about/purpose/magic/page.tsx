import { getHostname } from "@/utils/getHostname";
import { Metadata } from "next";

export const metadataBasic = {
  title: "Crafting AI-Powered Magic",
  description:
    "Empowering you to achieve the extraordinary in the evolving world of work",
  preTitle: () => (
    <div style={{ fontWeight: "bold", fontFamily: "Ovureused Grotesk" }}>
      ABOUT / PURPOSE / VOCATION
    </div>
  ),
};

export const metadata: Metadata = {
  title: metadataBasic.title,
  description: metadataBasic.description,
  metadataBase: getHostname(),
  openGraph: {
    title: metadataBasic.title,
    description: metadataBasic.description,
    type: "article",
  },
  twitter: {
    title: metadataBasic.title,
    description: metadataBasic.description,
    card: "summary_large_image",
  },
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="pb-8">
        <h1>Crafting AI-Powered Magic</h1>
        <h2 className="mt-1 border-none">
          To unlock extraordinary human potential in the future of work.
        </h2>
      </div>
      <div className="pt-4">
        <h2 className="font-bold mb-3">My Purpose</h2>
        <p className="font-medium text-lg text-purple-500 dark:text-purple-200">
          To weave AI-powered magic into the fabric of the future of work, using
          design thinking and systems approach to craft tools that unlock
          extraordinary potential in individuals and organizations, transforming
          advanced productivity techniques into accessible spells for everyday
          wizards.
        </p>
      </div>
      <p>
        We are at the beginning of a new era in human productivity and
        potential.
      </p>
      <p>
        The future of work is not just about doing more; it's about unlocking
        the extraordinary within every individual and organization.
      </p>
      <p>This is my purpose, my calling, my magical quest.</p>

      <p>
        For me to show up well and pull the future into the present, I believe I
        need principles to help guide me.
      </p>
      <p>What follows are principles that guide my work.</p>
      <div className="pt-4 [&>p]:py-2">
        <h2>Principles for Magic</h2>
        <h3>1. The Power of AI Alchemy</h3>
        <p>I believe in the transformative power of artificial intelligence.</p>
        <p>
          AI is not just a tool; it's the philosopher's stone of our age,
          capable of turning the lead of mundane tasks into the gold of
          unprecedented productivity.
        </p>
        <p>
          I commit to harnessing this power, not to replace human ingenuity, but
          to amplify it beyond our wildest dreams.
        </p>
        <h3>2. Design Thinking as My Wand</h3>
        <p>In my pursuit of magic, design thinking is my wand.</p>
        <p>
          I use it to create magic of simplicity upon complex systems, to
          conjure intuitive solutions from chaotic problems.
        </p>
        <p>
          Through design, I make the invisible visible, the incomprehensible
          clear, and the impossible achievable.
        </p>
        <h3>3. Systems Approach: My Magical Circles</h3>
        <p>My magic is drawn using a systems approach.</p>
        <p>
          By understanding the interconnectedness of all things, I create
          holistic solutions that resonate with the natural flow of work and
          life.
        </p>
        <p>
          My solutions don't just solve problems; they harmonize entire
          ecosystems of productivity.
        </p>
        <h3>4. Bridging Worlds</h3>
        <p>
          I am the bridge builder between the arcane world of advanced
          productivity techniques and the realm of everyday users.
        </p>
        <p>
          My mission is to translate the complex into the simple, the esoteric
          into the accessible.
        </p>
        <p>
          I turn experts' secrets into common knowledge, empowering everyone.
        </p>
        <h3>5. Unlocking Human Potential</h3>
        <p>
          At the heart of my purpose lies a profound belief in human potential.
        </p>
        <p>
          I craft my tools not just to make work easier, but to elevate the
          human experience.
        </p>
        <p>
          By freeing minds from the mundane, I create space for creativity,
          innovation, and fulfillment.
        </p>

        <h3>6. The Magic of Synergy</h3>
        <p>
          My true power comes from the synergy of technical prowess, conceptual
          understanding, and visionary thinking.
        </p>
        <p>
          Like the three points of a magical triangle, these forces combine to
          create effects greater than the sum of their parts.
        </p>
        <h3>7. Democratizing Productivity</h3>
        <p>
          I envision a world where extraordinary productivity is not the
          privilege of the few, but the right of the many.
        </p>
        <p>
          My tools and techniques are the keys to this kingdom, freely given to
          all who seek to unlock their potential.
        </p>
        <h3>8. Continuous Evolution</h3>
        <p>The future of work is ever-changing, and so are we.</p>
        <p>I commit to constant learning, adaptation, and innovation.</p>
        <p>
          My magic evolves with the times, always pushing the boundaries of
          what's possible.
        </p>
        <h3>9. Ethical Enchantment</h3>
        <p>I wield my power responsibly.</p>
        <p>
          The magic I create is crafted with ethical considerations at their
          core, ensuring that the magic I unleash benefits humanity as a whole.
        </p>
        <h3>10. Invitation to Co-Creation</h3>
        <p>
          I invite all visionaries, innovators, and dreamers to join me in this
          magical quest.
        </p>
        <p>
          Together, we will rewrite the rules of productivity, reimagine the
          future of work, and unleash a new age of human achievement.
        </p>
      </div>
      <h2>Pull The Future Into The Present</h2>
      <p>
        In this new world, every individual has the potential to be a wizard,
        every organization a magical guild, and every challenge an opportunity
        for transformation.
      </p>
      <p>
        Join me as I create magic that will shape the future of work and unlock
        the extraordinary potential within us all.
      </p>
    </div>
  );
}
