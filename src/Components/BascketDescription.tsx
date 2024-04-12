import { useContext, useEffect } from 'react';
import { ProductCount } from './ProductCountContext';
import { getCookieValue } from './Cookie';
import { CookieDelete } from "./DeleteCookieContext"

function BascketDescription() {

  let productCountContext = useContext(ProductCount)
  let deleteCookieContext = useContext(CookieDelete)

  useEffect(()=>{


    let itemArray = getCookieValue("Pramodh")
    productCountContext.setCount(itemArray?.length)

  },[deleteCookieContext.cookieDelete])



  return (
    <>
    <section className="product-main-header">
        <div className="container">
            <div className="product-header">
                <h2>Basket</h2>
                <h3>{productCountContext?.count} items</h3>
            </div>

        </div>


    </section>
    </>
  )
}

export default BascketDescription