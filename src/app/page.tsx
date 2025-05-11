import { About, Banner, CarouselPlugin, Detail, Footbar, Navbar, Partners, Service, Testimonial, Textbar } from "@/components";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Textbar
        text = "Snug brings bespoke comfort to your home with custom furnishings that blend style,<br /> function, and durability perfect for any space."
        bgColor="bg-white"
      />
      <Detail />
      <Service />
      <About />
      <Partners />
      {/* <Testimonial /> */}
      <CarouselPlugin />
      <Footbar />
    </div>
  );
}
