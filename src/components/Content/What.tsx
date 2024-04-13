export const What = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:align-center">
      <div className="max-w-xs self-center lg:max-w-md">
        <img src="/img/curious_chase.png" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold">Hey, I'm Chase!</p>

        <p className="mt-4 text-3xl font-extrabold leading-tight">
          I empower creators, bootstrappers, and indie hackers to build for the
          web.
        </p>
        <p className="mt-4 text-lg">
          Why? Because I believe in{" "}
          <span className="text-[#8B79C8] dark:text-[#A696DE]">
            democratizing the creation of the web
          </span>
          .
          <div>
            If you have an idea and drive, I want to help you make it real. idea
            real.
          </div>
        </p>
        <div className="mt-4">Ways we can build together...</div>
      </div>
    </div>
  );
};
