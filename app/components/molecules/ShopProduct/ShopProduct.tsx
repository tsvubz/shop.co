import Image from '@app/components/atoms/Image/Image';
import './ShopProduct.scss'
import Button from '@app/components/atoms/Button/Button';
import { useContext } from 'react';
import { CartContext } from '@app/context/CartContextProvider';
import Flex from '@app/components/atoms/Flex/Flex';
import { AlignItems, FlexDirection, FlexGap } from '@app/utils/styles';
 
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
        <Flex direction={FlexDirection.COLUMN} gap={FlexGap.ZERO}>
            <Image src={imgUrl} alt={title} />
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} gap={FlexGap.ZERO}>
                <h4 className='title'>
                    {title}
                </h4>             
                <p className='rating'>
                    {rating}
                </p>
                <Flex>
                    <h3 className='price'>
                        ${price}
                    </h3>
                    <Button label={`Add To Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ''}`} onClick={() => addToCart(id)} />
                </Flex>
            </Flex>
            
            
        </Flex>
    )
}

export default ShopProduct