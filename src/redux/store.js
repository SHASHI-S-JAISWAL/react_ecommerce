import {applyMiddleware, createStore} from 'redux'
import fetchproducts from "./reducers/fetchProducts"
import thunk from 'redux-thunk'


const store = createStore(fetchproducts, applyMiddleware(thunk))

export default store