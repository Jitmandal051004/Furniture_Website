import { Banner, Navbar, Textbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Textbar />
    </div>
  );
}
