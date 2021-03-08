import React from "react"
import { Product } from "../../types/Product"
import styled from "styled-components"
import { Button, Image } from "semantic-ui-react"

const StyledProductListItem = styled.div`
    display: flex;
    margin-bottom: 15px;

    & > div {
        padding: 10px;
    }

    .image-div {
        img {
            max-width: 150px;
        }
    }
    .title-div {
        max-width: 300px;
    }
    .price-div {
        align-self: center;
    }

    .actions-div {
        margin-left: auto;
        align-self: center;
    }
`
export const ProductList: React.FC<{products: Product[], onAddToCart: (product: Product) => void}> = ({products, onAddToCart}) => {
    return (
        <div className="product-list">
            {products.map((product) => {
                return (
                    <StyledProductListItem className="product-list-item" key={product.id}>
                        <div className="image-div">
                            <Image src={product.image} />
                        </div>
                        <div className="title-div">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="price-div">
                            <b>${product.price}</b>
                        </div>
                        <div className="actions-div">
                            <Button color="blue" onClick={() => onAddToCart(product) }>Add To Cart</Button>
                        </div>
                    </StyledProductListItem>
                )
            })}
        </div>
    )
}