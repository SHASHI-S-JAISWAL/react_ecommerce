import Paper from '@material-ui/core/Paper'
import '../styles/Cart.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function CheckOutBox(props) {


    return (
        <div className="paperContainer">
            <div className="CheckOutBox">
                <div className ="textwide">
                    <Typography>1</Typography>
                    <Typography>2</Typography>
                </div>
                <div className ="textwide">
                    <Typography>1</Typography>
                    <Typography>2</Typography>
                </div>
                <hr />
                <div className ="textwide">
                    <Typography>1</Typography>
                    <Typography>2</Typography>
                </div>  
                <div className = "checkoutbtn">
                    <Button variant="contained" color="secondary" >
                    Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}