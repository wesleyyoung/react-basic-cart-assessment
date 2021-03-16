import React from "react"
import {Button, ButtonGroup, Grid, Header, Icon, Label} from "semantic-ui-react"
import styled from "styled-components"
import {CartItem} from "../../types";
import {currencyFormat} from "../../utils";
import ButtonLink from "../Button/ButtonLink";
import {CartListItem} from "./CartListItem";

const StyledSidebar = styled.div`
    background: #EAEAEA;
    min-height: 500px;
    padding: 25px;
`
export const CartSidebar: React.FC<{ items: CartItem[], total: number, addItem: (item: CartItem, qty?: number) => void, removeItem: (item: CartItem) => void }> =
  ({items, total, addItem, removeItem}) => {

    return (
      <StyledSidebar>
        <Header size="medium" content="Items In Cart"/>
        <div className="cart-items">
          <Grid>
            {items.map(item => <CartListItem item={item} removeItem={removeItem} addItem={addItem}/>)}
          </Grid>
        </div>
        <div className="cart-footer">
          <Grid>
            <Grid.Row>
              <Grid.Column width="8">
                <Header content="Total:"/>
              </Grid.Column>
              <Grid.Column width="8">
                <Header content={currencyFormat(total)} textAlign='right'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </StyledSidebar>
    )
  }
