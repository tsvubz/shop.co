import Image from '@app/components/atoms/Image/Image';
import styles from './Product.module.scss'
import Flex from '@app/components/atoms/Flex/Flex';
import { AlignItems, FlexDirection, FlexGap, JustifyContent } from '@app/utils/styles';

interface ProductProps {
    imgUrl: string;
    title: string;
    rating: string;
    price: number;
}

const Product = ({ imgUrl, title, rating, price }: ProductProps) => {
    return (
        <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.NORMAL} gap={FlexGap.ZERO}>
            <Image src={imgUrl} alt={title} className={styles.image}/>
            <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START} justifyContent={JustifyContent.CENTER} gap={FlexGap.ZERO}>
                <h4 className='title'>
                    {title}
                </h4>
                <p className='rating'>
                    {rating}
                </p>
                <h3 className='price'>
                    ${price}
                </h3>
            </Flex>
        </Flex>
    )
}

export default Product