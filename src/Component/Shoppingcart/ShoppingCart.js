import ShoppingcartTabs from './ShoppingCartTabs';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import React, { createContext } from "react";



const ProductContext = createContext();

const Shopping = () => {
  const [loading,setLoading] =useState(true);
    const [products, setProducts] = useState();
    useEffect(() => {
        Axios.get("https://fakestoreapi.com/products").then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
      }, []);
    return(
        <div>
            {/* <ProductContext.Provider value={{ products }}> */}
            <ShoppingcartTabs Data={products} loading={loading}/>
            {/* </ProductContext.Provider> */}
          
        </div>
    )
}

export default Shopping;