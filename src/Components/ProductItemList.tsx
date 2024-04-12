

import  { useEffect, useState } from 'react'
import axios from 'axios'
import loadingGIF from "../images/loading.gif"
import {setCookie} from './Cookie'

interface product {

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number
    }


}

function ProductItemList() {



    let [data, setData] = useState<product[]>([])
    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(true)
    let baseURL = "https://fakestoreapi.com/products"


    let addItemToBucket = (item:product) =>{

        let { id, title, price, image } = item;
        let itemCount = 1;
        let cookieItem = { id, title, price, image,itemCount };
        let cookieName = "Pramodh";

        setCookie( {selectedItems:cookieItem ,cookieName:cookieName})




    }


    let getData = async () => {

        try {
            let response = await axios.get(baseURL)
            setData(data = [...response.data])
            console.log(data)
            setLoading(false)
            setError(false)

        } catch (err) {

            setLoading(false)
            setError(true)

        }



    }



    useEffect(() => {
        getData()

    }, [])


    if (error) { return <h1>Error</h1> }

    if (loading) {
        return (<div className="loading">
            <img src={loadingGIF}></img>
        </div>)
    }

    return (
        <section className="item-list">
            <div id="container" className="container">

                {data.map((item, index) => {
                    return (index === 1 ? (
                        <div className="item margin-from-bottom" key={index}>
                            <div className="item-img">
                                <img src={item.image} alt=""></img>
                            </div>
                            <div className="item-text">
                                <h2>{item.title}</h2>
                                <h3>{item.price} / lb</h3>
                                <h4>{item.description}</h4>
                                <button className="btn-add-cart" onClick={()=>addItemToBucket(item)} >Add to cart</button>
                            </div>
                        </div>
                    ) : (

                        <div id="otheritem" className="item margin-from-left margin-from-bottom" key={index}>
                            <div className="item-img">
                                <img src={item.image} alt="" ></img>

                            </div>

                            <div className="item-text">
                                <h2>{item.title}</h2>
                                <h3>{item.price} / lb</h3>
                                <h4>{item.description}</h4>
                                <button className="btn-add-cart" onClick={()=>addItemToBucket(item)} >Add to cart</button>
                            </div>
                        </div>
                    ))
                })}


            </div>
        </section>
    )
}

export default ProductItemList