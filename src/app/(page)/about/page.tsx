import { Aboutbanner, Bg, Footbar, Navbar, Partners, Team, Testimonial } from "@/components";

export default function about() {
    return (
        <div className="wrapper">
            <Navbar />
            <Aboutbanner />
            <Team />
            <Bg />
            <Partners />
            <Testimonial />
            <Footbar />
        </div>
    );
}