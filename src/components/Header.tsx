"use client";

import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { FC, PropsWithChildren, useCallback, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  return (
    <div
      className={cn(
        "mx-2",
        "md:mx-auto",
        "my-2",
        "md:my-4",
        "flex",
        "flex-wrap",
        "md:flex-nowrap",
        "max-w-5xl",
        "justify-start",
        "gap-2",
        "items-center"
      )}
    >
      <div className="order-1 justify-self-start p-2 md:p-0 basis-3/6 md:basis-1/3">
        <Link href="/">Curiously Chase</Link>
      </div>
      <div className={cn("md:ml-auto flex items-center", "order-3 md:order-2")}>
        <NavigationMenu className={cn("md:flex", showMenu ? "flex" : "hidden")}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/posts/"
                className={cn(navigationMenuTriggerStyle())}
              >
                Posts
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about/"
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://crca.news"
                className={navigationMenuTriggerStyle()}
              >
                Newsletter
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div
        className={cn(
          "flex gap-2 p-2 md:p-0",
          "order-2 md:order-3 basis-3/6 md:basis-auto"
        )}
      >
        <Button onClick={toggleMenu} className={cn("md:hidden ml-auto")}>
          Menu
        </Button>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

const HeaderLink: FC<PropsWithChildren<{ href: string; target?: string }>> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href} className="text-md" {...rest}>
      {children}
    </Link>
  );
};
