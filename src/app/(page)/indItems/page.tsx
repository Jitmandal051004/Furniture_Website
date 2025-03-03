import { Footbar, Navbar, ProductDetail, QNSimg, Testimonial } from "@/components";


export default function indItems() {
    return (
        <div className="wrapper">
            <Navbar />
            <ProductDetail />
            <Testimonial />
            <QNSimg 
                img={"i"}
            />
            <Footbar />
        </div>
    );
}