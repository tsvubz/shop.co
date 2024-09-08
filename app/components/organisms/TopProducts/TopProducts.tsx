import Container from '@app/components/atoms/Container/Container'
import Flex from '@app/components/atoms/Flex/Flex'
import Grid from '@app/components/atoms/Grid/Grid'
import { topproducts } from '@app/data/topproducts'
import { AlignItems, JustifyContent } from '@app/utils/styles'
import Product from '@molecules/Product/Product'
import styles from './TopProducts.module.scss'
import Button from '@app/components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'


const TopProducts = () => {

const navigate = useNavigate()

  return (
    <Container paddingDesktop='desktop-1' paddingTablet='tablet-1' paddingMobile='mobile-1' >
      <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.CENTER}>
        <h2 className={styles.h2}>top selling</h2>
      </Flex>
      
      <Grid columnsDesktop="desktop-4" columnsTablet="tablet-3" columnsMobile="mobile-2">
        {topproducts.map((product) => (
          <Product 
            key={product.id} 
            imgUrl={product.imgUrl} 
            title={product.title} 
            rating={product.rating} 
            price={product.price} 
          />
        ))}
      </Grid>
      <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.CENTER}>
        <Button label='View All' onClick={() => navigate('/shop')}/>
      </Flex>
    </Container>

  )
}

export default TopProducts