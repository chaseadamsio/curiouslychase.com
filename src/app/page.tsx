import { What } from "@/components/Content/What";
import { Writing } from "@/components/Content/Writing";
import { Currently } from "./Currently";

export const metadata = {
  title: "Chase Adams",
  description: "Chase Adams' Home on the Internet",
};

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
