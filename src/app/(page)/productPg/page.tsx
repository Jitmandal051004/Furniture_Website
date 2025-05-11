import { Footbar, Navbar, ProductDropdowns, ProductList, QNSimg } from "@/components";


export default function productPg() {
    return (
        <div className="wrapper">
            <Navbar />
            <ProductDropdowns />
            <ProductList />
            <Footbar />
        </div>
    );
}