import '@assets/styles/global.scss'
import Nav from '@organisms/Nav/Nav'
import CartProduct from '@molecules/CartProduct/CartProduct'


const App = () => {
  

  return (
    <>
      <Nav />
      <CartProduct 
        imgUrl='/public/images/cart3.jpg' 
        title='Gradient Graphic T-shirt'
        size='Large'
        color='White'
        price='$145'
      />
    </>
  )
}

export default App
