import { useContext } from 'react';

import './CartProduct.module.scss'
import Image from '@app/components/atoms/Image/Image';
import Flex from '@app/components/atoms/Flex/Flex';
import { FaRegTrashCan } from "react-icons/fa6";
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
            <Image src={imgUrl} alt={title} />
            <Flex gap={FlexGap.MEDIUM}>
                <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} gap={FlexGap.XSMALL}>
                    <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} gap={FlexGap.ZERO}>
                        <h4>{title}</h4>
                        <p>Size: {size}</p>
                        <p>Color: {color}</p>
                    </Flex>
                    <h3>${price}</h3>
                </Flex>
                <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.END} gap={FlexGap.SMALL}>
                    <FaRegTrashCan />
                    <div className='counter'>
                        <Button label='-' onClick={() => removeFromCart(id)} className='subtract-button' />
                        <input
                            value={cartItems[id] as number | undefined}
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                        />
                        <Button label='+' onClick={() => addToCart(id)} className='add-button' />
                    </div>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CartProduct