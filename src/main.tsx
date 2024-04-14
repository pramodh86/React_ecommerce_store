import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home.tsx';
import './App.css'
import Product from './Pages/Product.tsx';
import BascketMain from './Pages/Bascket.tsx';
import { ProductCountProvider } from './Context/ProductCountContext.tsx';
import { CookieDeleteProvider } from './Context/DeleteCookieContext.tsx';



const router = createBrowserRouter([

{

path: "/",
element:<CookieDeleteProvider><ProductCountProvider><Home/></ProductCountProvider></CookieDeleteProvider>,
errorElement: <div> 404 page not found</div>


},

{
path: "/items",
element:<CookieDeleteProvider><ProductCountProvider><BascketMain/></ProductCountProvider></CookieDeleteProvider>,
errorElement: <div> 404 page not found</div>



},

{

path: "/product",
element:<CookieDeleteProvider><ProductCountProvider><Product/></ProductCountProvider></CookieDeleteProvider>,
errorElement: <div> 404 page not found</div>


}


])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    
    

    
     <RouterProvider router={router}/>
    

     

   </React.StrictMode>,
)
