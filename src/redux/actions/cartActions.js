import {FECTH_ALL_PRODUCTS, CART_ADD_REMOVE_ACTION, UPDATE_CART_ITEM, CURRENT_RENDERING, SET_Y_OFFSET} from "../actionTypes.js"
import axios from 'axios'
const auth_key = process.env.REACT_APP_AUTH

const REACT_APP_fetch_all = process.env.REACT_APP_fetch_all
const REACT_APP_update = process.env.REACT_APP_update

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
    return ( dispatch ) => {
        dispatch({
            type: CART_ADD_REMOVE_ACTION,
            payload: data
        })
        const {item: { id, cartQuantity} = {}, type} = data;
        axios.post(REACT_APP_update, { 
            product_id: id,
            auth_key,
            quantity : type === 'ADD' ? cartQuantity + 1 : cartQuantity - 1
        })
    }
}

export const updateCartItem = data => {
    return ( dispatch ) => {
        dispatch({
            type: UPDATE_CART_ITEM,
            payload: data
        })
        const {itemId, quantity} = data;
        axios.post(REACT_APP_update, { 
            product_id: itemId,
            auth_key,
            quantity
        })
    }
}

export const setCurrentPage = data=>{
    return {
        type :CURRENT_RENDERING ,
        payload :data 
    }
}
export const setYoffSet = data=>{
    return {
        type :SET_Y_OFFSET ,
        payload :data 
    }
}