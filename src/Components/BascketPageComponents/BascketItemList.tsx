import { useEffect, useState } from 'react'
import { updateCookie, getCookieValueAsync } from '../../Utills/Cookie'
import OrderSummary from './OrderSummary';
import { useContext } from 'react'
import { CookieDelete } from "../../Context/DeleteCookieContext"


interface selectedItems {

    id: number;
    title: string;
    price: number;
    image: string;
    itemCount: number


}



function BascketItemList() {


    
    let [selectedItemsList, setSelectedItemsList] = useState<selectedItems[]>([])
    let [numberOfItems, setNumberOfItems] = useState<boolean>(false)
    let [valueNumerOfItems, setValueNumerOfItems] = useState<string>("")
    let [totalAmount, setTotalAmount] = useState(0)
    let deleteCookieContext = useContext(CookieDelete)

    let itemList: selectedItems[] = []



    async function setSelectedItemsToState(): Promise<boolean> {
        setSelectedItemsList(itemList)
        return true
    }

    async function getItemsFromTheCookie() {

        itemList = await getCookieValueAsync("Pramodh")
        let status: boolean = await setSelectedItemsToState()
        console.log(status)
        let total = 0;
        itemList.map((item) => {
            total = total + (item.price * item.itemCount)
        })
        console.log(total)
        setTotalAmount(total)

    }

    useEffect(() => {

        
        getItemsFromTheCookie()
       
        console.log("bascket page")




    }, [numberOfItems,deleteCookieContext.cookieDelete])


    function handleOnChangeItemCount(updatedID: number) {

        
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
                 <OrderSummary total={totalAmount}></OrderSummary> 


                



            </div>
        </section>
    )
}

export default BascketItemList