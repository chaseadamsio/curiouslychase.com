"use client";

import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, UseFormHandleSubmit, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";
import { log } from "@/utils/logger";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "mx-2",
        "flex",
        "max-w-5xl",
        "justify-between",
        "items-center",
        "py-4"
      )}
    >
      <div className="order-1 justify-self-start p-2 items-center flex gap-2 md:p-0 basis-3/6 md:basis-1/3">
        <Link href="/" className="font-bold text-xl">
          curiouslychase
        </Link>
      </div>
      <div className={cn("md:ml-auto flex items-center", "order-3 md:order-2")}>
        <Dialog>
          <NavigationMenu
            className={cn("md:flex", showMenu ? "flex" : "hidden")}
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle({
                    active: !!pathname.match("^/$"),
                  })()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/posts/"
                  className={cn(
                    navigationMenuTriggerStyle({
                      active: log(!!pathname.match("/posts")),
                    })()
                  )}
                >
                  Posts
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about/"
                  className={navigationMenuTriggerStyle({
                    active: !!pathname.match("/about"),
                  })()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://crca.news"
                  className={navigationMenuTriggerStyle({ active: false })()}
                >
                  Newsletter
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Dialog>
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

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const form = useForm<ContactFormInputs>({});
  const onSubmit: SubmitHandler<ContactFormInputs> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="pt-4 flex flex-col gap-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" {...form.register("name")} />
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" {...form.register("email")} />
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <Label htmlFor="message">Message</Label>
          <Textarea {...form.register("message")} />
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};
