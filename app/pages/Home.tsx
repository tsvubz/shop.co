import { Horizontal } from '@app/components/atoms/Horizontal/Horizontal'
import Brands from '@app/components/molecules/Brands/Brands'
import Hero from '@app/components/molecules/Hero/Hero'
import NewProducts from '@app/components/organisms/NewProducts/NewProducts'
import TopProducts from '@app/components/organisms/TopProducts/TopProducts'


export const Home = () => {
  return (
    <div>
        <Hero />
        <Brands />
        <NewProducts />
        <Horizontal widthDesktop='desktop-1' widthTablet='tablet-1' widthMobile='mobile-1' />
        <TopProducts />
        <Horizontal widthDesktop='desktop-1' widthTablet='tablet-1' widthMobile='mobile-1' />
         
    </div>
  )
}
