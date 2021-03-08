import React from "react"
import { Grid, Header } from "semantic-ui-react"
import { CartSidebar } from "../Components/Cart/CartSidebar"
import { FixedMenuLayout } from "../Components/Layout/FixedMenuLayout"
import { ProductList } from "../Components/Product/ProductList"
import { Product } from "../types/Product"

const demoProducts: Product[] = [
    {
        id: 111,
        title: "Colorful Shoes",
        description: "Colorful shoes that are a great bargain, and very cheep",
        image: "/img/colorful-shoes.jpg",
        price: 19.00
    },
    {
        id: 222,
        title: "Dumbel Shoes",
        description: "The best shoes for working out.  These shoes come with a pile of dumbells.",
        image: "/img/dumbell-shoes.jpg",
        price: 50.00
    },
    {
        id: 333,
        title: "Green Shoes",
        description: "Are these shoes blue, or are they green? Keep your friends arguing for hours!",
        image: "/img/green-shoes.png",
        price: 10.00
    },
]

export const CartPage: React.FC = () => {
    return <div className="cart-page">
        <FixedMenuLayout>
            <Header size="large" content="Add Items To Cart" />

            <Grid>
                <Grid.Column width="12">
                    <ProductList products={demoProducts} />
                </Grid.Column>
                <Grid.Column width="4">
                    <CartSidebar />
                </Grid.Column>
            </Grid>
        </FixedMenuLayout>
    </div>
}

