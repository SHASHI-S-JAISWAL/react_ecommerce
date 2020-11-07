import React,{useEffect} from 'react' 
import store from '../../redux/store'
import {useDispatch,useSelector} from  'react-redux'
import {fetchAllProducts} from '../../redux/actions/cartActions'
import CartItem from '../../components/CartItem'
import CheckoutBox from '../../components/CheckoutBox'
import '../../styles/Cart.css'

const auth = process.env.REACT_APP_AUTH
const Home = (props) =>{ 
    let products =  useSelector (state => state.products.products  )
    const dispatch = useDispatch()
    // console.log(products[0])
    useEffect(() => {
        dispatch(fetchAllProducts())
        console.log(1)
        return () => {
        }
    }, []);

    return (
        <div className ="CartRoot">
            <div className = "cartcardwrapper" >
                {products ?<> {products.map(
                    (product) =>{ return (
                        <CartItem  item = {product}
                        />)
                    }
                )}</> : <></>}
            </div>
            <div className="sideBox">
                <CheckoutBox />
            </div>
        </div>
    )

}


export default Home 