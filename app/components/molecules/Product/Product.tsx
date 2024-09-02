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
            <div className='product--image-box'>
                <img src={imgUrl} alt={title} className='product--image'/>
            </div>
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