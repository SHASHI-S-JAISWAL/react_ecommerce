import {FECTH_ALL_PRODUCTS} from "./actionTypes.js"
import axios from 'axios'

const REACT_APP_fetch_all = process.env.REACT_APP_fetch_all

export const  fetchProducts = (data) =>{
    
    console.log(data);
    return {
        type : FECTH_ALL_PRODUCTS,
        payload : data
    }
} 



export const fetchAllProducts = () =>{

    return ( dispatch ) =>{
        axios.get(`${REACT_APP_fetch_all}&pageNo=1&itemsPerPage=100`)
        .then(res => {  
            console.log(REACT_APP_fetch_all)
            const fetched = res.data
            console.log(fetched)
            dispatch(fetchProducts(fetched))})

    }
}
