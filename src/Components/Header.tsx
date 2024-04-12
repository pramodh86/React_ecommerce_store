import { Link } from "react-router-dom"


function Header() {
  return (
    <>
    <header>
        <div className="container" >
            <div className="main-header-text">
                We’re <i>farmers, purveyors</i> , and <i>eaters</i> of<br></br>
                organically grown food.
            </div>
            <div className="browse-button">
             <Link to={"/product"}>Browse our shop</Link>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default Header