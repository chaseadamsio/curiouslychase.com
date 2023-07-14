import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { FC, PropsWithChildren } from "react";

export const Header = () => {
  return (
    <header className="max-w-5xl mx-auto font-display mb-8">
      <div className="flex flex-row items-center gap-4 pb-4">
        <img
          className="w-[36px] h-[36px] rounded-full inline-block mr-2]"
          src="/img/curious_chase.png"
          alt="Curious Chase"
          width="100"
          height="100"
        />
        <h2 className="my-0 py-0 lowercase font-subtitle text-3xl">
          Curiously Chase
        </h2>
      </div>
      <nav className="font-subtitle">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/posts">Blog</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
        <HeaderLink href="https://crca.news" target="_blank">
          Newsletter
        </HeaderLink>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

const HeaderLink: FC<PropsWithChildren<{ href: string; target?: string }>> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <a href={href} className="text-md" {...rest}>
      {children}
    </a>
  );
};
