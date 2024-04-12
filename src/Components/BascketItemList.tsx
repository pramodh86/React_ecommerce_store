import { useEffect, useState } from 'react'
import { getCookieValue, updateCookie, getCookieValueAsync } from './Cookie'
import OrderSummary from './OrderSummary';

interface selectedItems {

    id: number;
    title: string;
    price: number;
    image: string;
    itemCount: number


}



function BascketItemList() {


    //let selectedItemsList: selectedItems[] = []
    let [selectedItemsList, setSelectedItemsList] = useState<selectedItems[]>([])
    let [numberOfItems, setNumberOfItems] = useState<boolean>(false)
    let [valueNumerOfItems, setValueNumerOfItems] = useState<string>("")
    let [totalAmount, setTotalAmount] = useState(0)

    let itemList: selectedItems[] = []



    async function setSelectedItemsToState(): Promise<boolean> {
        setSelectedItemsList(itemList)
        return true
    }

    async function getItemsFromTheCookie() {

        itemList = await getCookieValueAsync("Pramodh")
        let status: boolean = await setSelectedItemsToState()
        //calculateTotal()
        let total = 0;
        itemList.map((item) => {
            total = total + (item.price * item.itemCount)
        })
        console.log(total)
        setTotalAmount(total)

    }

    useEffect(() => {

        //selectedItemsList = getCookieValue("Pramodh")
        //setSelectedItemsList(getCookieValue("Pramodh"))
        //calculateTotal()
        getItemsFromTheCookie()
        //calculateTotal()
        console.log("bascket page")




    }, [numberOfItems])


    function handleOnChangeItemCount(updatedID: number) {

        //setNumberOfItems(itemCount)
        let arrayToUpdate = [...selectedItemsList]
        arrayToUpdate.map((item) => {

            if (item.id === updatedID) {
                item.itemCount = Number(valueNumerOfItems)
            }
        })

        updateCookie("Pramodh", arrayToUpdate)
        setSelectedItemsList(arrayToUpdate)
        let total = 0;
        selectedItemsList.map((item) => {
            total = total + (item.price * item.itemCount)
        })
        console.log(total)
        setTotalAmount(total)

        setNumberOfItems(true)
    }




    return (
        <section className="basket-item-list">
            <div className="container">

                <div className="items">






                    {selectedItemsList?.map((item, index) => {
                        return index === 0 ? (

                            <div className="item" key={index}>
                                <div className="item-image-desc-wrapper">
                                    <div className="item-image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="item-description">
                                        <div>
                                            <h3>${item.title}</h3>
                                            <h4>${item.price} / <span>{item.itemCount}</span></h4>
                                        </div>
                                        <div className="editable-amount">
                                            <input type="text"
                                                className="input-item-number"
                                                id="itemCountInput"
                                                placeholder="No's"

                                                onChange={(e) => setValueNumerOfItems(e.target.value)}
                                            >

                                            </input>
                                            <button className="add-number-btn"
                                                onClick={() => handleOnChangeItemCount(item.id)}
                                            >Add</button>

                                        </div>

                                    </div>
                                </div>
                                <div className="price">
                                    <h3>{item.price * item.itemCount}</h3>
                                </div>
                            </div>






                        ) : (



                            <div className="item margin-from-top" key={index}>
                                <div className="item-image-desc-wrapper">
                                    <div className="item-image">
                                        <img src={item.image} alt="" ></img>
                                    </div>
                                    <div className="item-description">
                                        <h3>{item.title}</h3>
                                        <h4>${item.price} / <span>{item.itemCount}</span></h4>
                                        <div className="editable-amount">
                                            <input
                                                type="text"
                                                className="input-item-number"
                                                id="${numberOfItemsTextBoxId}"
                                                placeholder="No's"

                                                onChange={(e) => setValueNumerOfItems(e.target.value)} >



                                            </input>
                                            <button className="add-number-btn"
                                                onClick={() => handleOnChangeItemCount(item.id)}
                                            >Add</button>

                                        </div>

                                    </div>
                                </div>
                                <div className="price">
                                    <h3>{item.price * item.itemCount}</h3>
                                </div>


                            </div>

                        )


                    })}










                </div>
                {/* <OrderSummary total={totalAmount}></OrderSummary> */}


                <div className="order-summary">
                    <h3>Order summary</h3>
                    <div className="total-wrapper margin-from-the-top-37">
                        <div className="sub-total">Sub total</div>
                        <div className="value" id="id-sub-total"><h2>{Math.round(totalAmount * 100) / 100}</h2></div>
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
                    <div className="payment-wrapper" >

                        <a href="#" >Clear Cart</a>
                        <a href="#"></a>
                    </div>


                </div>



            </div>
        </section>
    )
}

export default BascketItemList