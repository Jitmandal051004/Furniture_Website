import { Inter, Roboto_Slab, DM_Sans, EB_Garamond } from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"] 
});

export const roboto_slab = Roboto_Slab({
    weight: ["500", "400", "600"],
    subsets: ["latin"]
})

export const dm_sans = DM_Sans({
    weight: ["400", "500", "600"],
    subsets: ["latin"]
})

export const eb_garamond = EB_Garamond({
    weight: ["400","500", "600"],
    subsets: ["latin"]
})