export const Currently = () => {
  return (
    <main className="mt-12 max-w-5xl mx-auto">
      <div className="pb-4">
        <h2 className="my-0 text-3xl">What I&apos;m Up To</h2>
      </div>
      <section>
        I'm currently building{" "}
        <a
          className="text-purple-400 hover:text-purple-300 dark:text-purple-200 dark:hover:text-purple-200"
          href="https://useplumb.com"
        >
          Plumb
        </a>
        , an AI enabled and enhanced tool for creating complex workflows with
        natural language.
      </section>
    </main>
  );
};
