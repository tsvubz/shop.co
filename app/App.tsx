import '@assets/styles/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/organisms/Nav/Nav'
import { CartContextProvider } from './context/CartContextProvider'
import { Shop } from './pages/Shop'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'



const App = () => {
 

  return (
    <>
      <CartContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
      </CartContextProvider>  
    </>
  )
}

export default App
