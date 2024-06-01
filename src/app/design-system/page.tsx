import { Blockquote } from "@/components/Blockquote";
import { PageHeading } from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, PropsWithChildren } from "react";

const DSH2: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="pt-4 text-3xl border-none">{children}</h2>;
};

const DSH3: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="pt-4 text-2xl border-none">{children}</h3>;
};

const DSH4: FC<PropsWithChildren> = ({ children }) => {
  return <h4 className="pt-4 text-xl border-none">{children}</h4>;
};

export default function DesignSystem() {
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
            <div className="flex gap-2">
              <div className="rounded-full w-[32px] h-[32px]"></div>
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
            <Blockquote calloutTitle="An Info Callout" calloutType="info">
              <p>This is a callout for information. </p>
              <p>Use these for supplemental information.</p>
            </Blockquote>

            <Blockquote calloutTitle="A Tip Callout " calloutType="tip">
              <p>This is a callout for tips.</p>
              <p>Use these for tips and tricks.</p>
            </Blockquote>
            <Blockquote calloutTitle="An Warning Callout" calloutType="warning">
              <p>This is a callout for warnings.</p>
              <p>Use these for any gotchas that a user should watch out for.</p>
              <p>Also use these for WIP.</p>
            </Blockquote>
            <Blockquote calloutTitle="A Danger Callout" calloutType="danger">
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
