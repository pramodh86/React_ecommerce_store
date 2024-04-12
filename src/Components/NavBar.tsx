
import {Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductCount } from './ProductCountContext';
import { getCookieValue } from './Cookie';
import { CookieDelete } from "./DeleteCookieContext"

function NavBar() {

  
  let productCountContext = useContext(ProductCount)
  let deleteCookieContext = useContext(CookieDelete)

  useEffect(()=>{


    let itemArray = getCookieValue("Pramodh")
    productCountContext.setCount(itemArray?.length)

  },[deleteCookieContext.cookieDelete])



  return (
    <>
    
    <nav>
        <div className="container" >
            <div className="logo"><Link to={"/"}>World Peas</Link></div>
            <div className="menu">
                <ul className="menu-list">
                    <li><Link to={"/product"}>Shop</Link></li>
                    <li><a href="">Newstand</a></li>
                    <li><a href="">Who we are</a></li>
                    <li><a href="">My Profile</a></li>
                </ul>
            </div>
            <div className="link-basket">
            <Link to={"/items"}>Basket  <span id="index-cart-item-count-btn">{productCountContext?.count}</span></Link>
            </div>


        </div>


    </nav>
 
    
    
    
    
    </>
  )
}

export default NavBar