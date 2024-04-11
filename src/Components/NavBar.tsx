
import {Link} from 'react-router-dom';

function NavBar() {
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
            <Link to={"/items"}>Basket  <span id="index-cart-item-count-btn">(0)</span></Link>
            </div>


        </div>


    </nav>
 
    
    
    
    
    </>
  )
}

export default NavBar