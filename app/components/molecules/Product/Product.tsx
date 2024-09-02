import Image from '@app/components/atoms/Image/Image';
import './Product.scss'

interface ProductProps {
    imgUrl: string;
    title: string;
    rating: string;
    price: string;
}

const Product = ({ imgUrl, title, rating, price }: ProductProps) => {
    return (
        <div className='product--card'>
            <Image src={imgUrl} alt={title} />
            <div className='product--title'>
                <h4 className='title'>
                    {title}
                </h4>
            </div>
            <div className='product--rating'>
                <p className='rating'>
                    {rating}
                </p>
            </div>
            <div className='product--price'>
                <h3 className='price'>
                    {price}
                </h3>
            </div>
        </div>
    )
}

export default Product