
import './CartProduct.module.scss'
import Image from '@app/components/atoms/Image/Image';
import Flex from '@app/components/atoms/Flex/Flex';
import { FaRegTrashCan } from "react-icons/fa6";
import { AlignItems, FlexDirection, FlexGap, JustifyContent } from '@app/utils/styles';

interface ProductProps {
    imgUrl: string;
    title: string;
    size: string;
    color: string;
    price: string;
}

const Product = ({ imgUrl, title, size, color, price }: ProductProps) => {
    return (
        <Flex gap={FlexGap.XSMALL}>
            <Image src={imgUrl} alt={title} />
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} gap={FlexGap.XSMALL}>
                <Flex alignItems={AlignItems.BASELINE} justifyContent={JustifyContent.SPACE_EVENLY} gap={FlexGap.LARGE}>
                    <div className='cart--details'>
                        <h4>{title}</h4>
                        <p>Size: {size}</p>
                        <p>Color: {color}</p>
                    </div>
                    <div><FaRegTrashCan /></div>
                </Flex>
                <Flex>
                    <h3>{price}</h3>
                    <div></div>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Product