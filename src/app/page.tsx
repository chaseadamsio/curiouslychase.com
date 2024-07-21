import { What } from "@/components/Content/What";
import { Writing } from "@/components/Content/Writing";
import { Currently } from "./Currently";

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
