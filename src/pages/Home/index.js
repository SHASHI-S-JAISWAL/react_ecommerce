import React,{useEffect} from 'react' 
import store from '../../redux/store'
import {useDispatch,useSelector} from  'react-redux'
import {fetchAllProducts} from '../../redux/actions'
import ItemCard from '../../components/Card'
import '../../styles/Home.css'

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
        <div>
            <div className = "cardwrapper" >
                {products ?<> {products.map(
                    (product) =>{ return (
                        <ItemCard  item = {product}
                            
                        />)
                    }
                )}</> : <></>}
            </div>
        </div>
    )

}


export default Home 