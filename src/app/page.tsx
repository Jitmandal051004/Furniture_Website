import { About, Banner, Detail, Footbar, Navbar, Partners, Service, Testimonial, Textbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Textbar />
      <Detail />
      <Service />
      <About />
      <Partners />
      <Testimonial />
      <Footbar />
    </div>
  );
}
