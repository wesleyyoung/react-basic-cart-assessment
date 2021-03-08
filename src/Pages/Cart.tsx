import React from "react"
import { Header } from "semantic-ui-react"
import { FixedMenuLayout } from "../Components/Layout/FixedMenuLayout"

export const CartPage: React.FC = () => {
    return <div className="cart-page">
        <FixedMenuLayout>
            <Header content="This is the cart page" />
        </FixedMenuLayout>
    </div>
}

