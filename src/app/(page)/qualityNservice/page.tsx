import { Footbar, Navbar, QNS, QNSdetail, QNSimg, Textbar } from "@/components";


export default function qualityNservice() {
    return (
        <div className="wrapper">
            <Navbar />
            <QNSdetail />
            <Textbar 
                text = 'Snug crafts high-quality custom furnishings with premium materials, expert<br /> craftsmanship, and lasting durability'
                bgColor="bg-[#E5E4DF]"
            />
            <QNSimg 
                img={"q"}
            />
            <Footbar />
        </div>
    );
}