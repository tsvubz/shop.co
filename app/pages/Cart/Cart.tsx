import { useContext } from 'react'
import { CartContext } from '@app/context/CartContextProvider'
import Grid from '@app/components/atoms/Grid/Grid'
import CartProduct from '@app/components/molecules/CartProduct/CartProduct'
import { products } from '@app/data/products'
import Flex from '@app/components/atoms/Flex/Flex'
import Button from '@app/components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import Container from '@app/components/atoms/Container/Container'
import styles from './Cart.module.scss'
import Scroll from '@app/components/atoms/Scroll/Scroll'
import { AlignItems, FlexDirection, FlexGap } from '@app/utils/styles'


export const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(CartContext) || {}; // Added null check
    const subtotal = getTotalCartAmount ? getTotalCartAmount() : 0; // Handle potential null

    let discount = 0;
    if (subtotal > 1000) {
        discount = subtotal * 0.15; // 15% discount
    }

    let deliveryFee = 0;
    if (subtotal < 500) {
        deliveryFee = subtotal * 0.1; // 10% delivery fee
    } else if (subtotal < 1000) {
        deliveryFee = subtotal * 0.05; // 5% delivery fee
    }

    const totalAmount = subtotal - discount + deliveryFee; // Calculate total

    const navigate = useNavigate();

  return (
    <Container>
        <Flex className={styles.cart} gap={FlexGap.SMALL}>
            <Scroll height='450px' overflow='auto'>
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
            </Scroll>
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.CENTER} gap={FlexGap.ZERO} className={styles.summary}>
                <h3>Order Summary</h3>
                <Flex alignItems={AlignItems.BASELINE} gap={FlexGap.SMALL}>
                    <h4>Subtotal:</h4>
                    <span>${subtotal}</span>
                </Flex>
                <Flex alignItems={AlignItems.BASELINE} gap={FlexGap.SMALL}>
                    <h4>Discount:</h4>
                    <span>${discount}</span>
                </Flex>
                <Flex alignItems={AlignItems.BASELINE} gap={FlexGap.SMALL}>
                    <h4>Delivery Fee:</h4>
                    <span>${deliveryFee}</span>
                </Flex>
                <Flex alignItems={AlignItems.BASELINE} gap={FlexGap.SMALL}>
                    <h3>Total:</h3>
                    <span>${totalAmount}</span>
                </Flex>
                <Button label='Continue Shopping' onClick={() => navigate("/shop")} className={styles.btn}/>
            </Flex>
        </Flex>
    </Container>
  )
}
