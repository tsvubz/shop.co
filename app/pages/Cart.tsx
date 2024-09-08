import { useContext } from 'react'
import { CartContext } from '@app/context/CartContextProvider'
import Grid from '@app/components/atoms/Grid/Grid'
import CartProduct from '@app/components/molecules/CartProduct/CartProduct'
import { products } from '@app/data/products'
import Flex from '@app/components/atoms/Flex/Flex'
import Button from '@app/components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import Container from '@app/components/atoms/Container/Container'


export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(CartContext) || {}; // Added null check
    const totalAmount = getTotalCartAmount ? getTotalCartAmount() : 0; // Handle potential null

    const navigate = useNavigate();

  return (
    <Container paddingDesktop='desktop-1' paddingTablet='tablet-1' paddingMobile='mobile-1' >
        <Flex>
            <Grid columnsDesktop="desktop-1" columnsTablet="tablet-1" columnsMobile="mobile-1">
            {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartProduct 
                            id={product.id} 
                            imgUrl={product.imgUrl} 
                            title={product.title} 
                            price={product.price} 
                        />; 
                    }
                })}
            </Grid>
            <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <Button label='Continue Shopping' onClick={() => navigate("/shop")} />
            </div>
        </Flex>
    </Container>
  )
}
