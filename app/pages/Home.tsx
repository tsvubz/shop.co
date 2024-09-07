import Brands from '@app/components/molecules/Brands/Brands'
import Hero from '@app/components/molecules/Hero/Hero'
import NewProducts from '@app/components/organisms/NewProducts/NewProducts'


export const Home = () => {
  return (
    <div>
        <Hero />
        <Brands />
        <NewProducts />
    </div>
  )
}
