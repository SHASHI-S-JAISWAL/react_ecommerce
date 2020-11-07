import axios from "axios";
import {FECTH_ALL_PRODUCTS, CART_ADD_REMOVE_ACTION, UPDATE_CART_ITEM} from "../actionTypes.js" ;


const initialState = {
    products : [],
    cartItems: []
}

const cartReducer = (state = initialState ,action) => {
    const {products= []} = state;
    switch (action.type) {
        case FECTH_ALL_PRODUCTS :
            const newProducts = action.payload;
            return{
                ...state,
                products : newProducts,
                cartItems: newProducts.filter(product => product.cartQuantity > 0)
            }

        case CART_ADD_REMOVE_ACTION:
            const data = action.payload;
            const {item, type} = data;
            const {id, cartQuantity} = item;
            const modifiedProducts = products.map(product => {
                if (product.id === id) {
                    return { ...product, cartQuantity: type === 'ADD' ? cartQuantity + 1 : cartQuantity - 1}
                }
                return product;
            });
            return {
                ...state,
                products: modifiedProducts,
                cartItems: modifiedProducts.filter(product => product.cartQuantity > 0)
            }
        case UPDATE_CART_ITEM:
            const { itemId, quantity} = action.payload;
            const modifiedCartProducts = products.map(product => {
                if (product.id === itemId) {
                    return { ...product, cartQuantity: quantity}
                }
                return product;
            });
            return {
                ...state,
                products: modifiedCartProducts,
                cartItems: modifiedCartProducts.filter(product => product.cartQuantity > 0)
            }
        default : return state ;
    }
}

export default cartReducer;