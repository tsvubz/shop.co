import './Nav.scss'
import { Link } from 'react-router-dom';
import { FaCartShopping, FaMagnifyingGlass, FaRegCircleUser } from "react-icons/fa6";

function Nav() {
  return (
    <header>
        <div className='head--main'>
          <Link to='/'>
            <h2 className="head--title">SHOP.CO</h2>
          </Link>
          
          <nav className='head--nav'>
            <ul className='nav--list'>
              <Link to='/shop'>Shop</Link>
              <Link to='/sale'>On Sale</Link>
              <Link to='new'>New Arrivals</Link>
              <Link to='/brands'>Brands</Link>
            </ul>
         </nav>
        </div>
        <div className='head--search'>
          <input type="text" 
                className='search'
                
                />
          <label className='search--label' htmlFor="text">Search for products...</label>
          <FaMagnifyingGlass className='search--icon'/>
        </div>
        <div className='head--icons'>
          <Link to='/cart'><FaCartShopping /></Link>
          <FaRegCircleUser />
        </div>
    </header>
  )
}

export default Nav