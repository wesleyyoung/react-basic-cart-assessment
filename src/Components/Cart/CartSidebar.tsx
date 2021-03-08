import React from "react"
import { Grid, Header } from "semantic-ui-react"
import styled from "styled-components"

const StyledSidebar = styled.div`
    background: #EAEAEA;
    min-height: 500px;
    padding: 25px;
`
export const CartSidebar: React.FC = () => {
    
    return (
        <StyledSidebar>
            <Header size="medium" content="Items In Cart" /> 
            <div className="cart-items">

            </div>
            <div className="cart-footer">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="8">
                            <Header content="Total:" />
                        </Grid.Column>
                        <Grid.Column width="8">
                            <Header content="[Todo: Price here]" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </StyledSidebar>
    )
}