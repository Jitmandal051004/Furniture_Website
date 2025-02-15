import { Footbar, Navbar, QNS, QNSdetail, QNSimg, Textbar } from "@/components";


export default function about() {
    return (
        <div className="wrapper">
            <Navbar />
            <QNS />
            <QNSdetail />
            <Textbar 
                text = 'Snug crafts high-quality custom furnishings with premium materials, expert<br /> craftsmanship, and lasting durability'
                bgColor="bg-[#E5E4DF]"
            />
            <QNSimg />
            <Footbar />
        </div>
    );
}