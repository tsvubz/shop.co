import './Brands.scss'
import versace from '../../../../public/brands/versace.png'
import zara from '../../../../public/brands/zara.png'
import gucci from '../../../../public/brands/gucci.png'
import prada from '../../../../public/brands/prada.png'
import calvin from '../../../../public/brands/calvinklein.png'

function Brands() {
  return (
    <section className='brands--section'>
        <div className='brands--container'>
            <img src={versace} alt="versace" />
            <img src={zara} alt="zara" />
            <img src={gucci} alt="gucci" />
            <img src={prada} alt="" />
            <img src={calvin} alt="" />
        </div>
    </section>
  )
}

export default Brands