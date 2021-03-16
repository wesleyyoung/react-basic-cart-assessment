import React from "react";
import {CartItem} from "../../Types";
import {Button, ButtonGroup, Grid, Header, Icon} from "semantic-ui-react";
import {currencyFormat} from "../../Utils";
import ButtonLink from "../Button/ButtonLink";

export const CartListItem: React.FC<{ item: CartItem, addItem: (item: CartItem, qty?: number) => void, removeItem: (item: CartItem) => void }> =
  ({item, addItem, removeItem}) => {
  return (
    <Grid.Row key={item.id}>
      <Grid.Column width="10">
        <Header
          size='small'
          textAlign='left'
          content={item.title}
        />
      </Grid.Column>
      <Grid.Column width="6">
        <Header
          size='small'
          textAlign='right'
          content={currencyFormat(item.price * item.quantity)}
        />
      </Grid.Column>
      <Grid.Column width="8">
        <ButtonLink basic size='small' content='remove' onClick={() => removeItem(item)}/>
      </Grid.Column>
      <Grid.Column width="8" textAlign='right'>
        <ButtonGroup size='mini'>
          <Button size='mini' color='black' icon onClick={() => addItem(item, -1)}>
            <Icon name='minus' />
          </Button>
          <Button icon>
            {item.quantity}
          </Button>
          <Button size='mini' color='blue' icon onClick={() => addItem(item, 1)}>
            <Icon name='plus' />
          </Button>
        </ButtonGroup>
      </Grid.Column>
    </Grid.Row>
  );
}
