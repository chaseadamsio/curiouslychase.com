import { What } from "@/components/Content/What";
import { Writing } from "@/components/Content/Writing";
import { getHostname } from "@/utils/getHostname";
import { Metadata } from "next";
import { Currently } from "./Currently";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = getHostname();
  return {
    title: "Chase Adams",
    description: "Chase Adams' Home on the Internet",
    metadataBase: hostname,
  };
}

export default function Home() {
  return (
    <>
      <div>
        <What />
      </div>
      <Currently />
      <Writing />
    </>
  );
}
