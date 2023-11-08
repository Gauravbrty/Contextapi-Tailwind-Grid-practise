import ShoppingcartTabs from './ShoppingCartTabs';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import {ProductContext} from '../ContextAPI/product-context';




const Shopping = () => {
  const [loading,setLoading] =useState(true);
    const [products, setProducts] = useState();
    useEffect(() => {
        Axios.get("https://fakestoreapi.com/products").then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
      }, []);
      const [cartProducts, setCartProducts] = useState([]);
    const DeleteData = (id) => {
     const FilteredData= cartProducts.filter ((item)=> {
        return (id!== item.id)
      })
      setCartProducts(FilteredData);
    }
    return(
        <div>
            <ProductContext.Provider value={{ products,setProducts,loading,cartProducts,setCartProducts,DeleteData}}>
            <ShoppingcartTabs/>
            </ProductContext.Provider>
          
        </div>
    )
}

export default Shopping;