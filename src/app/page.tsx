import { What } from "@/components/Content/What";
import { Writing } from "@/components/Content/Writing";

const Currently = () => {
  return (
    <main className="mt-12 max-w-5xl mx-auto">
      <div className="pb-4">
        <h2 className="my-0 text-3xl font-medium">What I&apos;m Up To</h2>
      </div>
      <section>
        I'm currently building{" "}
        <a className="text-[#e3ff9c]" href="https://useplumb.com">
          Plumb
        </a>
        , an AI enabled and enhanced tool for creating complex workflows with
        natural language.
      </section>
    </main>
  );
};

export default function Home() {
  return (
    <>
      <What />
      <Currently />
      <Writing />
    </>
  );
}
