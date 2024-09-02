import Grid from '@app/components/atoms/Grid/Grid'
import newProducts from '@data/newItems.json'
import Product from '@molecules/Product/Product'


const NewProducts = () => {
  return (
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
  )
}

export default NewProducts