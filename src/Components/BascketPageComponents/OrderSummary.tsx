

import { deleteCookie } from "../../Utills/Cookie"
import { useContext } from 'react'
import { CookieDelete } from "../../Context/DeleteCookieContext"

interface Props{
    total:number
}


function OrderSummary( {total}:Props) {


    let cookieDelete = useContext(CookieDelete)


    function clearPaymentHandler()
    {
        deleteCookie("Pramodh")
        cookieDelete.setCookieDelete(true)

    }

  
    
  return (
    <>
        <div className="order-summary">
                    <h3>Order summary</h3>
                    <div className="total-wrapper margin-from-the-top-37">
                        <div className="sub-total">Sub total</div>
                        <div className="value" id="id-sub-total"><h2>{Math.round(total * 100) / 100}</h2></div>
                    </div>
                    <div className="total-wrapper margin-from-the-top-20">
                        <div className="sub-total">Shipping</div>
                        <div className="value">00.00</div>
                    </div>
                    <div className="total-wrapper margin-from-the-top-20">
                        <div className="sub-total">Tax</div>
                        <div className="value">00.00</div>
                    </div>
                    <div className="total-wrapper margin-from-the-top-20">
                        <div className="sub-total">
                            <h3>Total</h3>
                        </div>
                        <div className="value">
                            <h3 id="id-total">$00.00</h3>
                        </div>
                    </div>
                    <div className="payment-wrapper">

                        <a href="#">Continue to payment</a>
                        <a href="#"></a>
                    </div>
                    <div className="payment-wrapper" onClick={clearPaymentHandler}>

                        <a href="#" >Clear Cart</a>
                        <a href="#"></a>
                    </div>


                </div>
    
    
    
    
    </>
  )
}

export default OrderSummary