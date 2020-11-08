import React,{useEffect} from 'react' 
import store from '../../redux/store'
import {useDispatch,useSelector} from  'react-redux'
import {fetchAllProducts, updateCartItem, setCurrentPage} from '../../redux/actions/cartActions'
import CartItem from '../../components/CartItem'
import CheckoutBox from '../../components/CheckoutBox'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../styles/Cart.css'

import { useHistory } from 'react-router-dom';
import ItemCard from '../../components/Card'

const Cart = (props) =>{ 
    const cartItems =  useSelector (state => state.cartItems)
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(setCurrentPage('cart'))
        console.log('cart render')
        return () =>{
            
        dispatch(setCurrentPage('home'))
        }
    }, []);

    const onSetItemQuantity = (data) => {
        dispatch(updateCartItem(data))
    }
    const clearCart =() =>{
        cartItems.forEach(({id}) => {dispatch(updateCartItem({ quantity: 0, itemId: id }))} )
    }
    return (
        <div className ="CartRoot">
            <div className = "cartcardwrapper" >
            <div className="shoppingcartname">
                <Typography component="h5" variant="h5" style ={{paddingLeft : "20px"}}>
                    Shopping Cart
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" style ={{paddingLeft : "10px"}}>
                    ( {cartItems.length} items)
                </Typography>
                <Button color="primary" style ={{paddingLeft : "20px",textTransform:"none"}}
                onClick ={clearCart}>
                     Clear Cart
                </Button>
            </div>
            <div className="cartname">
                <div className="cartitemname">
                    <Typography variant="subtitle1" color="textSecondary">
                        Item Details
                    </Typography>
                </div>
                <div className="cartsel">
                    <Typography variant="subtitle1" color="textSecondary">
                    Quantity
                    </Typography>
                </div>
                <div className="cartrate">
                    <Typography variant="subtitle1" color="textSecondary">
                    Rate
                    </Typography>
                </div>
                <div className="cartrate">
                    <Typography variant="subtitle1" color="textSecondary">
                    Amount
                    </Typography>
                </div>
            </div>
                {cartItems.map(item => <CartItem
                    key={item.id}
                    item={item}
                    setItemQuantity={onSetItemQuantity}
                />)}
                
                <div className="contshop">
                <Button variant="outlined" color="secondary" onClick={() => history.push('/')}> 
                    {`< Continue Shopping`}
                    </Button>
                </div>
            </div>
            <div className="sideBox">
                <CheckoutBox cleartbox = {clearCart}/>
            </div>
        </div>
    )

}


export default Cart 