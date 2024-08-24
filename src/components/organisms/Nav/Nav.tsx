import './Nav.scss'
import { FaCartShopping, FaMagnifyingGlass, FaRegCircleUser } from "react-icons/fa6";

function Nav() {
  return (
    <header>
        <div className='head--main'>
          <h2 className="head--title">SHOP.CO</h2>
          <nav className='head--nav'>
            <ul className='nav--list'>
              <li className='nav--item'>Shop</li>
              <li className='nav--item'>On Sale</li>
              <li className='nav--item'>New Arrivals</li>
              <li className='nav--item'>Brands</li>
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
          <FaCartShopping />
          <FaRegCircleUser />
        </div>
    </header>
  )
}

export default Nav