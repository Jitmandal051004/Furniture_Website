import { CarouselPlugin, Footbar, Navbar, ProductDetail, QNSimg, Testimonial } from "@/components";


export default function indItems() {
    return (
        <div className="wrapper">
            <Navbar />
            <ProductDetail />
            {/* <Testimonial /> */}
            <CarouselPlugin />
            <QNSimg 
                img={"i"}
            />
            <Footbar />
        </div>
    );
}