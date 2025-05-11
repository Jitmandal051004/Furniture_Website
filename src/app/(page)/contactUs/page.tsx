import { Bg, ContactForm, Footbar, Navbar } from "@/components";


export default function contactUs() {
    return (
        <div className="wrapper">
            <Navbar />
            <Bg />
            <ContactForm tagLine="Contact Us" />
            <Footbar />
        </div>
    );
}