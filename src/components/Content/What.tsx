import { Button } from "@/components/ui/button";
import Link from "next/link";

export const What = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:align-center">
      <div className="max-w-xs self-center w-[600px] lg:max-w-md">
        <img src="/img/Avatar.png" width={291} height={291} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold">Hey, I'm Chase!</p>
        <div className="mt-4">
          <div className="text-3xl">
            Crafting AI-powered magic to unlock extraordinary human potential in
            the future of work.
          </div>
          <Button className="mt-3" variant="primary" asChild>
            <Link href="/about/purpose/magic">Discover My Vision</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
