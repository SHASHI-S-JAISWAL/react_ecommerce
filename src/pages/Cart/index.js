import React,{useEffect} from 'react' 
import store from '../../redux/store'
import {useDispatch,useSelector} from  'react-redux'
import {fetchAllProducts, updateCartItem} from '../../redux/actions/cartActions'
import CartItem from '../../components/CartItem'
import CheckoutBox from '../../components/CheckoutBox'
import '../../styles/Cart.css'
import ItemCard from '../../components/Card'

const Cart = (props) =>{ 
    const cartItems =  useSelector (state => state.cartItems)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, []);

    const onSetItemQuantity = (data) => {
        dispatch(updateCartItem(data))
    }

    return (
        <div className ="CartRoot">
            <div className = "cartcardwrapper" >
                {cartItems.map(item => <CartItem
                    key={item.id}
                    item={item}
                    setItemQuantity={onSetItemQuantity}
                />)}
            </div>
            <div className="sideBox">
                <CheckoutBox />
            </div>
        </div>
    )

}


export default Cart 