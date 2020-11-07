import axios from "axios";
import {FECTH_ALL_PRODUCTS} from "../actionTypes.js" ;


const initialState = {
    products : []
}

 const fetchProducts = (state = initialState ,action) => {
    switch (action.type) {
        case FECTH_ALL_PRODUCTS : return{
            ...state,
            products : action.payload
        }

        default : return state ;
    }
}

export default fetchProducts;