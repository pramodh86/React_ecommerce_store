
import NavBar from "./NavBar"
import ProductDescription from "./ProductDescription"
import ProductItemList from "./ProductItemList"
import { getCookieValue } from "./Cookie"


interface selectedItem{


    id: number;
    title: string;
    price: number;
    image: string;





}

function Product() {

    let selectedItems:selectedItem[]=[] 
    selectedItems = getCookieValue("Pramodh")



  return (
   <>
   
   <NavBar></NavBar>
   <ProductDescription></ProductDescription>
   <ProductItemList></ProductItemList>

   </>
  )
}

export default Product