import { useEffect, useState } from 'react'
import { getCookieValue } from './Cookie'
import OrderSummary from './OrderSummary';

interface selectedItems {

    id: number;
    title: string;
    price: number;
    image: string;


}



function BascketItemList() {


    //let selectedItemsList: selectedItems[] = []
    let [selectedItemsList, setSelectedItemsList] = useState<selectedItems[]>([])

    useEffect(() => {

        //selectedItemsList = getCookieValue("Pramodh")
        setSelectedItemsList(getCookieValue("Pramodh"))
        console.log("bascket page")
        console.log(selectedItemsList)



    }, [])




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
                                            <h4>${item.price} / <span>1b</span></h4>
                                        </div>
                                        <div className="editable-amount">
                                            <input type="text" className="input-item-number" id="${numberOfItemsTextBoxId}" placeholder="No's" ></input>
                                            <button className="add-number-btn" >Add</button>

                                        </div>

                                    </div>
                                </div>
                                <div className="price">
                                    <h3>price</h3>
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
                                        <h4>${item.price} / <span>1b</span></h4>
                                        <div className="editable-amount">
                                            <input type="text" className="input-item-number" id="${numberOfItemsTextBoxId}" placeholder="No's" ></input>
                                            <button className="add-number-btn" >Add</button>

                                        </div>

                                    </div>
                                </div>
                                <div className="price">
                                    <h3>Price</h3>
                                </div>


                            </div>

                        )


                    })}










                </div>
                <OrderSummary></OrderSummary>
            </div>
        </section>
    )
}

export default BascketItemList