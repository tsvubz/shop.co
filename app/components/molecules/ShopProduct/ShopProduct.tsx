import Image from '@app/components/atoms/Image/Image';
import styles from './ShopProduct.module.scss'
import Button from '@app/components/atoms/Button/Button';
import { useContext } from 'react';
import { CartContext } from '@app/context/CartContextProvider';
import Flex from '@app/components/atoms/Flex/Flex';
import { AlignItems, FlexDirection, FlexGap, JustifyContent } from '@app/utils/styles';
 
interface ProductProps {
    id: number;
    imgUrl: string;
    title: string;
    rating: string;
    price: number;
}

const ShopProduct = ({ id, imgUrl, title, rating, price }: ProductProps) => {

    const { addToCart, cartItems } = useContext(CartContext) || { addToCart: () => {}, cartItems: [] }; // Fallback to prevent null access

    const cartItemCount = cartItems[id];

    return (
        <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.NORMAL} gap={FlexGap.ZERO}>
            <Image src={imgUrl} alt={title} className={styles.image}/>
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} justifyContent={JustifyContent.CENTER} gap={FlexGap.ZERO}>
                <h4 className={styles.h4}>
                    {title}
                </h4>             
                <p className={styles.p}>
                    {rating}
                </p>
                <Flex alignItems={AlignItems.BASELINE} justifyContent={JustifyContent.SPACE_AROUND} className={styles.shopflex}>
                    <h3 className={styles.h3}>
                        ${price}
                    </h3>
                    <Button label={`To Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ''}`} onClick={() => addToCart(id)} className={styles.btn}/>
                </Flex>
            </Flex> 
        </Flex>
    )
}

export default ShopProduct