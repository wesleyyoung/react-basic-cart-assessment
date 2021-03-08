import React, { useState } from "react"
import { Grid, Header } from "semantic-ui-react"
import { CartSidebar } from "../Components/Cart/CartSidebar"
import { FixedMenuLayout } from "../Components/Layout/FixedMenuLayout"
import { ProductList } from "../Components/Product/ProductList"
import { CartProduct, Product } from "../types/Product"

const demoProducts: Product[] = [
    {
        id: 111,
        title: "Colorful Shoes",
        description: "Colorful shoes that are a great bargain, and very cheep",
        image: "/img/colorful-shoes.jpg",
        price: 19.99
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
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

    const addProductToCart = (product: Product, quantity: number = 1) => {
        const found = cartProducts.find((p) => p.id === product.id)
        const products = [...cartProducts]
        if(found){
            found.quantity += quantity;
            products.splice(products.indexOf(found), 1, found)
        }else{
            products.push({...product, quantity})
        }
        setCartProducts(products)
    }
    const removeProductFromCart = (product: Product) => {
        const products = [...cartProducts] 

        const index = products.findIndex((p) => p.id === product.id)
        if(index > -1){
            products.splice(index, 1)
            setCartProducts(products)
        }
    }
    return <div className="cart-page">
        <FixedMenuLayout>
            <Header size="large" content="Add Items To Cart" />

            <Grid>
                <Grid.Column width="12">
                    <ProductList products={demoProducts} onAddToCart={addProductToCart} />
                </Grid.Column>
                <Grid.Column width="4">
                    <CartSidebar items={cartProducts} onRemoveFromCart={removeProductFromCart} />
                </Grid.Column>
            </Grid>
        </FixedMenuLayout>
    </div>
}

