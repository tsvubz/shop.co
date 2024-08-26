import './Product.scss'
import image1 from '../../../../public/images/image 1.jpg'

function Product() {
  return (
    <div className='product--card'>
        <div className='product--image-box'>
            <img src={image1} alt="" />
        </div>
        <div className='product--title'>
            <h4>
                T-SHIRT WITH TAPE DETAILS
            </h4>
        </div>
        <div className='product--rating'>
            
            <p>
                4.5/5
            </p>
        </div>
        <div className='product--price'>
            <h3>
                $120
            </h3>
        </div>
    </div>
  )
}

export default Product