
import '../styles/Cart.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector} from  'react-redux'


export default function CheckOutBox(props) {

    const cartItems =  useSelector (state => state.cartItems)
    const total = cartItems.reduce((sum,i)=>{
         const itemPrice = i.price * i.cartQuantity
         return sum + itemPrice;
    }, 0);
    const {cleartbox} = props
    const handleCheckout = ()=>{
        alert("items Ordered")
        cleartbox()
    }
    
    return (
        <div className="paperContainer">
            <div className="CheckOutBox">
                <div className ="textwide">
                    <Typography>Order Worth</Typography>
                    <Typography>{total}</Typography>
                </div>
                <div className ="textwide">
                    <Typography>Total Saving</Typography>
                    <Typography>0</Typography>
                </div>
                <hr />
                <div className ="textwide">
                    <Typography>Amount Payable</Typography>
                    <Typography>{total}</Typography>
                </div>  
                <div className = "checkoutbtn">
                    <Button variant="contained" color="secondary" 
                    onClick ={handleCheckout}
                    >
                    Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}