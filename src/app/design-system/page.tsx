import { Blockquote } from "@/components/Blockquote";
import { PageHeading } from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

const DSH2: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="pt-4 text-3xl border-none">{children}</h2>;
};

const DSH3: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="mt-0 text-2xl border-none">{children}</h3>;
};

const DSH4: FC<PropsWithChildren> = ({ children }) => {
  return <h4 className="pt-4 text-xl border-none">{children}</h4>;
};

const ColorSwatch = ({
  color,
  textColor,
  text,
}: {
  color: string;
  textColor?: string;
  text?: string;
}) => {
  const colorNumber = parseInt(color.split("-")[2]);

  console.log(`"${color}"`);
  return (
    <div
      className={cn(
        `flex items-center justify-center w-[40px] h-[64px]`,
        color
      )}
    >
      <div
        className={cn(
          "text-sm",
          textColor
            ? textColor
            : colorNumber > 500
            ? "text-white"
            : "text-black"
        )}
      >
        {text ?? colorNumber}
      </div>
    </div>
  );
};

export default function DesignSystem() {
  const magenta = [
    "bg-magenta-50",
    "bg-magenta-100",
    "bg-magenta-200",
    "bg-magenta-300",
    "bg-magenta-400",
    "bg-magenta-500",
    "bg-magenta-600",
    "bg-magenta-700",
    "bg-magenta-800",
    "bg-magenta-900",
    "bg-magenta-950",
  ];

  const tuna = [
    "bg-tuna-50",
    "bg-tuna-100",
    "bg-tuna-200",
    "bg-tuna-300",
    "bg-tuna-400",
    "bg-tuna-500",
    "bg-tuna-600",
    "bg-tuna-700",
    "bg-tuna-800",
    "bg-tuna-900",
    "bg-tuna-950",
  ];

  const blue = [
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
    "bg-blue-950",
  ];

  const ultraviolet = [
    "bg-ultraviolet-50",
    "bg-ultraviolet-100",
    "bg-ultraviolet-950",
    "bg-ultraviolet-990",
  ];

  const base = ["bg-black", "bg-white-50", "bg-white-100"];

  return (
    <div className="page page--design-system">
      <PageHeading>Design System</PageHeading>
      <div className="pt-6">
        <Tabs defaultValue="colors">
          <TabsList>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="callouts">Callouts</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
          </TabsList>
          <TabsContent value="colors">
            <DSH2>Colors</DSH2>
            <div className="flex gap-2 flex-col">
              <DSH3>Base</DSH3>
              <div className="flex flex-col">
                <ColorSwatch
                  color={"bg-black"}
                  textColor={"text-white"}
                  text="black"
                />
                <DSH4>White</DSH4>
                <div className="flex">
                  <ColorSwatch color={"bg-white-50"} textColor={"text-black"} />
                  <ColorSwatch
                    color={"bg-white-100"}
                    textColor={"text-black"}
                  />
                </div>
              </div>
              <DSH3>Magenta</DSH3>
              <div className="flex">
                {magenta.map((c) => (
                  <div key={c} className="flex flex-col items-center">
                    <ColorSwatch color={c} />
                  </div>
                ))}
              </div>
              <DSH3>Tuna</DSH3>
              <div className="flex">
                {tuna.map((c) => (
                  <div key={c} className="flex flex-col items-center">
                    <ColorSwatch color={c} />
                  </div>
                ))}
              </div>
              <DSH3>Blue</DSH3>
              <div className="flex">
                {blue.map((c) => (
                  <div key={c} className="flex flex-col items-center">
                    <ColorSwatch color={c} />
                  </div>
                ))}
              </div>
              <DSH3>Ultraviolet</DSH3>
              <div className="flex">
                {ultraviolet.map((c) => (
                  <div key={c} className="flex flex-col items-center">
                    <ColorSwatch color={c} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="typography">
            <DSH2>Typography</DSH2>
            <div className="page">
              <DSH3>Headings</DSH3>
              <div className="">
                <Blockquote calloutTitle="Headings Tip" calloutType="info">
                  The only Headings I use are h1 through h4.
                </Blockquote>
                <PageHeading>This is a H1</PageHeading>
                <h2>This is a H2</h2>
                <h3>This is a H3</h3>
                <h4>This is a H4</h4>
              </div>

              <DSH3>Other Elements</DSH3>

              <DSH4>Paragraphs</DSH4>
              <p>
                This is a paragraph <a href="#">with a link.</a>
              </p>

              <p>
                This is a paragraph with a <strong>strong element.</strong>
              </p>

              <DSH4>Unordered List</DSH4>
              <ul>
                <li>The first item in an unordered list</li>
                <li>The second item in an unordered list</li>
                <li>The third item in an unordered list</li>
              </ul>

              <DSH4>Ordered List</DSH4>
              <ol>
                <li>The first item in an ordered list</li>
                <li>The second item in an ordered list</li>
                <li>The third item in an ordered list</li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="callouts">
            <DSH2>Callouts</DSH2>

            <Blockquote
              className="my-4"
              calloutTitle="An Info Callout"
              calloutType="info"
            >
              <p>This is a callout for information. </p>
              <p>Use these for supplemental information.</p>
            </Blockquote>

            <Blockquote
              className="my-4"
              calloutTitle="A Tip Callout "
              calloutType="tip"
            >
              <p>This is a callout for tips.</p>
              <p>Use these for tips and tricks.</p>
            </Blockquote>

            <Blockquote
              className="my-4"
              calloutTitle="An Warning Callout"
              calloutType="warning"
            >
              <p>This is a callout for warnings.</p>
              <p>Use these for any gotchas that a user should watch out for.</p>
              <p>Also use these for WIP.</p>
            </Blockquote>
            <Blockquote
              className="my-4"
              calloutTitle="A Danger Callout"
              calloutType="danger"
            >
              <p>This is a callout for danger.</p>
              <p>
                Use these for any information that could cause a user to bang
                their head against the table if they don't get it right.
              </p>
            </Blockquote>
          </TabsContent>
          <TabsContent value="buttons">
            <DSH2>Buttons</DSH2>
            <div className="flex flex-col gap-2 w-[400px]">
              <Button variant="primary">Primary Variant</Button>
              <Button variant={"default"}>Default Variant</Button>
              <Button variant={"secondary"}>Secondary Variant</Button>
              <Button variant={"link"}>Link Variant</Button>
              <Button variant={"ghost"}>Ghost Variant</Button>
              <Button variant={"outline"}>Outline Variant</Button>
              <Button variant={"destructive"}>Destructive Variant</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
