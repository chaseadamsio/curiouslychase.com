export const What = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:align-center">
      <div className="max-w-xs self-center lg:max-w-md">
        <img src="/assets/curiouslychase_photo.png" width={400} height={400} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold">Hey, I'm Chase!</p>
        <p className="mt-4">
          I empower creators, bootstrappers, and indie hackers to build for the
          web.
        </p>
        <p className="mt-4">
          I'm currently building{" "}
          <a className="text-[#e3ff9c]" href="https://useplumb.com">
            Plumb
          </a>
          : a no code AI pipeline builder for building and deploying AI features
          for product teams. .
        </p>
      </div>
    </div>
  );
};
