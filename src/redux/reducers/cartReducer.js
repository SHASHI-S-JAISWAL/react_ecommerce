import axios from "axios";
import {FECTH_ALL_PRODUCTS, UPDATE_CART} from "../actionTypes.js" ;


const initialState = {
    products : [],
    cartItems: []
}

const cartReducer = (state = initialState ,action) => {
    const {cartItems = [], products= []} = state;
    switch (action.type) {
        case FECTH_ALL_PRODUCTS : 
            return{
                ...state,
                products : action.payload
            }

        case UPDATE_CART:
            const data = action.payload;
            const {item, type} = data;
            const {id, cartQuantity} = item
            return {
                ...state,
                products: products.map(product => {
                    if (product.id === id) {
                        return { ...product, cartQuantity: type === 'ADD' ? cartQuantity + 1 : cartQuantity - 1}
                    }
                    return product;
                }),
                // cartItems: type==='ADD' ?  [...cartItems, item] : cartItems.filter
            }

        default : return state ;
    }
}

export default cartReducer;