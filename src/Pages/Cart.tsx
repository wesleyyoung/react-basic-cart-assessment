import React from "react"
import {Grid, Header} from "semantic-ui-react"
import {CartSidebar} from "../Components/Cart/CartSidebar"
import {FixedMenuLayout} from "../Components/Layout/FixedMenuLayout"
import {ProductList} from "../Components/Product/ProductList"
import {demoProducts} from "../fixtures";
import {useCartStore} from "../state";


export const CartPage: React.FC = () => {

  const [
    cartItems,
    cartTotal,
    addProduct,
    removeProduct
  ] = useCartStore(state => [
    state.items,
    state.total,
    state.addToCart,
    state.removeFromCart,
  ]);

  return <div className="cart-page">
    <FixedMenuLayout>
      <Header size="large" content="Add Items To Cart"/>
      <Grid>
        <Grid.Column width="12">
          <ProductList products={demoProducts} addProduct={addProduct} addedItems={cartItems}/>
        </Grid.Column>
        <Grid.Column width="4">
          <CartSidebar items={cartItems} total={cartTotal} addItem={addProduct} removeItem={removeProduct}/>
        </Grid.Column>
      </Grid>
    </FixedMenuLayout>
  </div>
}

