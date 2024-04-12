
import Cookies from 'universal-cookie'

interface Props {
     
    
    selectedItems:{
        id: number;
    title: string;
    price: number;
    image: string;
    itemCount:number;
    },
    
    cookieName:string
    

}


interface itemlist{

    id: number;
    title: string;
    price: number;
    image: string;
    itemCount:number;

}

export function  getCookieValue(cookieName:string) {
    
   
    
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            const cookieValue = cookie.substring(name.length, cookie.length);
            try {
                return JSON.parse(cookieValue); // Parse the cookie value as JSON
            } catch (error) {
                console.error("Error parsing cookie value:", error);
                return null; // Return null if there's an error parsing the JSON
            }
        }
    }
    return null; // Return null if the cookie is not found
}



export function setCookie({selectedItems,cookieName}:Props) {

    
    const cookies = new Cookies();
    let selectedItemArray: typeof selectedItems[]= [];
    const cookieValue = cookies.get(cookieName);
    

    if(cookieValue === undefined){

        selectedItemArray.push(selectedItems)
        cookies.set(cookieName, JSON.stringify(selectedItemArray),{ expires: new Date('9999-12-31T23:59:59') });
        
        
    }
    else{


        let isItemAlreadyAdded:boolean = false;
        let AlreadySelectedItems = getCookieValue(cookieName);
        AlreadySelectedItems.map((item:typeof selectedItems)=>{
              if(item.id === selectedItems.id ){

                isItemAlreadyAdded = true;
              }
       })

       if(isItemAlreadyAdded === false)
        {
            AlreadySelectedItems.push(selectedItems);
            cookies.set(cookieName, JSON.stringify(AlreadySelectedItems),{ expires: new Date('9999-12-31T23:59:59') });
            

        }
       
       console.log(AlreadySelectedItems)
       
             

    }
    

 
}

export function updateCookie(cookieName:string, list:itemlist[]){
 

const cookies = new Cookies();
cookies.remove(cookieName);
cookies.set(cookieName, JSON.stringify(list),{ expires: new Date('9999-12-31T23:59:59') });

}


export async function   getCookieValueAsync(cookieName:string): Promise<itemlist[]> {
    
   
    const emptyArray:itemlist[] = []
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            const cookieValue = cookie.substring(name.length, cookie.length);
            try {
                return JSON.parse(cookieValue); // Parse the cookie value as JSON
            } catch (error) {
                console.error("Error parsing cookie value:", error);
                return emptyArray; // Return null if there's an error parsing the JSON
            }
        }
    }
    return emptyArray; // Return null if the cookie is not found
}

