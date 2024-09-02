import newProducts from '@data/newItems.json'
import Product from '@molecules/Product/Product'


const NewProducts = () => {
  return (
    <div>
      {newProducts.map((product) => (
        <Product 
          key={product.id} 
          imgUrl={product.imgUrl} 
          title={product.title} 
          rating={product.rating} 
          price={product.price} 
        />
      ))}
    </div>
  )
}

export default NewProducts