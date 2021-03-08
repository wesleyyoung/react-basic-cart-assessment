import React, { useEffect, useState } from "react"
import { Button, Grid, Header, Icon } from "semantic-ui-react"
import styled from "styled-components"
import { CartProduct, Product } from "../../types/Product"

const StyledSidebar = styled.div`
    background: #EAEAEA;
    min-height: 500px;
    padding: 25px;

    .cart-item {
        display: flex;
        margin-bottom: 10px;
        align-items: center;

        .quantity {
            margin-left: auto;
        }
        .actions {
            padding-left: 10px;
        }
    }
`

const CartItem: React.FC<{item: CartProduct, onRemoveFromCart: (product: Product) => void}> = ({item, onRemoveFromCart}) => {
    return (
        <div className="cart-item">
            <div className="title">
                <b>{item.title}</b>
                <small style={{paddingLeft: '5px'}}> ${item.price.toFixed(2)} </small>
            </div>
            <div className="quantity">
                x {item.quantity}
            </div>
            <div className="actions">
                <Button color="red" icon size="mini" onClick={() => onRemoveFromCart(item)}>
                    <Icon name="times" />
                </Button>
            </div>
        </div>
    )
}

export const CartSidebar: React.FC<{items: CartProduct[], onRemoveFromCart: (product: Product) => void}> = ({items, onRemoveFromCart}) => {
    const [cartTotal, setCartTotal] = useState(0.00)

    useEffect(() => {
        const total = items.reduce((total, item) => {
            total += (item.price * item.quantity)

            return total
        }, 0.00)

        setCartTotal(total)
    }, [items])
    return (
        <StyledSidebar>
            <Header size="medium" content="Items In Cart" /> 
            <div className="cart-items">
                {items.map((item) => <CartItem item={item} key={item.id} onRemoveFromCart={onRemoveFromCart} />)}
            </div>
            <div className="cart-footer">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="5">
                            <Header content="Total:" />
                        </Grid.Column>
                        <Grid.Column width="11">
                            <Header style={{textAlign: "right"}}>
                                ${cartTotal.toFixed(2)}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </StyledSidebar>
    )
}