import './Brands.scss'
import versace from '../../../../public/brands/versace.png'
import zara from '../../../../public/brands/zara.png'
import gucci from '../../../../public/brands/gucci.png'
import prada from '../../../../public/brands/prada.png'
import calvin from '../../../../public/brands/calvinklein.png'
import Flex from '@app/components/atoms/Flex/Flex'
import { AlignItems, JustifyContent } from '@app/utils/styles'


function Brands() {
  return (
    <section className='brands--section'>
        <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.SPACE_BETWEEN} padding='2rem'>
            <img src={versace} alt="versace" />
            <img src={zara} alt="zara" />
            <img src={gucci} alt="gucci" />
            <img src={prada} alt="" />
            <img src={calvin} alt="" />
        </Flex>
    </section>
  )
}

export default Brands