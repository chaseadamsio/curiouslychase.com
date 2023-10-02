export const What = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:align-center">
      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold">Hey, I'm Chase!</p>

        <p className="mt-4 text-5xl font-extrabold leading-tight">
          I create clarity in the chaos of creativity.
        </p>
        <p className="mt-4 text-xl">
          <strong>
            I help creative professionals find creative freedom through
            structure.
          </strong>
          <br />I primarily focus on <strong>remote teams.</strong>
        </p>
      </div>
      <div className="max-w-xs self-center lg:max-w-md">
        <img src="/img/curious_chase.png" />
      </div>
    </div>
  );
};
