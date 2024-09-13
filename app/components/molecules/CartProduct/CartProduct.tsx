import { useContext } from 'react';

import styles from './CartProduct.module.scss'
import Image from '@app/components/atoms/Image/Image';
import Flex from '@app/components/atoms/Flex/Flex';
import { AlignItems, FlexDirection, FlexGap } from '@app/utils/styles';
import Button from '@app/components/atoms/Button/Button';
import { CartContext } from '@app/context/CartContextProvider';


interface ProductProps {
    id: number,
    imgUrl: string;
    title: string;
    size?: string;
    color?: string;
    price: number;
}

const CartProduct = ({ id, imgUrl, title, size, color, price }: ProductProps) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext) || { cartItems: {}, addToCart: () => {}, removeFromCart: () => {}, updateCartItemCount: () => {} };

    return (
        <Flex gap={FlexGap.XSMALL}>
            <Image src={imgUrl} alt={title} className={styles.img}/>
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START}  gap={FlexGap.ZERO}>
                <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} gap={FlexGap.ZERO}>
                    <h4 className={styles.h4}>{title}</h4>
                    <p className={styles.p}>Size: {size}</p>
                    <p className={styles.p}>Color: {color}</p>
                    <h3 className={styles.h3}>${price}</h3>
                </Flex>
                <div className={styles.counter}>
                    <Button label='-' onClick={() => removeFromCart(id)} className={styles.btn}/>
                    <input
                        value={cartItems[id] as number | undefined}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                        className={styles.inp}
                    />
                    <Button label='+' onClick={() => addToCart(id)} className={styles.btn} />
                </div>
            </Flex>
        </Flex>
    )
}

export default CartProduct