"use client";

import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <NavigationMenu
      className={cn(
        "mx-auto",
        "my-4",
        "max-w-5xl",
        "flex",
        "justify-between",
        "items-center"
      )}
    >
      <NavigationMenuList className="ml-0">
        <NavigationMenuItem className={cn("self-start")}>
          <NavigationMenuLink href="/">Curiously Chase</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className={cn("ml-auto")}>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/posts/"
            className={navigationMenuTriggerStyle()}
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
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
