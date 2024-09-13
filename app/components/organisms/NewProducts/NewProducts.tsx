import Container from '@app/components/atoms/Container/Container'
import Flex from '@app/components/atoms/Flex/Flex'
import Grid from '@app/components/atoms/Grid/Grid'
import { AlignItems, JustifyContent } from '@app/utils/styles'
import newProducts from '@data/newItems.json'
import Product from '@molecules/Product/Product'
import styles from './NewProducts.module.scss'
import Button from '@app/components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'


const NewProducts = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Flex alignItems={AlignItems.CENTER} justifyContent={JustifyContent.CENTER}>
        <h2 className={styles.h2}>new arrivals</h2>
      </Flex>
      <Grid columnsDesktop="desktop-4" columnsTablet="tablet-3" columnsMobile="mobile-2">
        {newProducts.map((product) => (
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
        <Button label='Shop' onClick={() => navigate('/shop')} className={styles.btn}/>
      </Flex>
    </Container>
  )
}

export default NewProducts