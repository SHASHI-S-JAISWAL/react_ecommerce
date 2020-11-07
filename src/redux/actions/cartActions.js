import {FECTH_ALL_PRODUCTS,UPDATE_CART,FECTH_ALL_CART} from "../actionTypes.js"
import axios from 'axios'

const REACT_APP_fetch_all = process.env.REACT_APP_fetch_all


export const fetchAllProducts = () =>{
    return ( dispatch ) =>{
        axios.get(`${REACT_APP_fetch_all}&pageNo=1&itemsPerPage=100`)
        .then(res => {  
            const { data: { products } = {}} = res;
            dispatch({
                type : FECTH_ALL_PRODUCTS,
                payload : products
            })})

    }
}
export const updateCart = (data) =>{
    return ( dispatch ) =>{
        dispatch({
            type: UPDATE_CART,
            payload: data
        })
        // axios.get(`${REACT_APP_fetch_all}&pageNo=1&itemsPerPage=100`)

    }
}
