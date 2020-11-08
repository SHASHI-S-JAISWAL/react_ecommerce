import React,{useEffect} from 'react' 
import store from '../../redux/store'
import {useDispatch,useSelector} from  'react-redux'
import {fetchAllProducts, updateCart , setYoffSet} from '../../redux/actions/cartActions'
import ItemCard from '../../components/Card'
import '../../styles/Home.css'

const auth = process.env.REACT_APP_AUTH
const Home = (props) =>{ 
    let products =  useSelector (state => state.products  )
    let yOffset = useSelector (state => state.yOffset  )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts());
        console.log('home mount');
        // window.addEventListener('scroll', handleScroll)
        window.scrollBy(0,yOffset);
        return () =>{
            const yaxis = window.pageYOffset 
            dispatch(setYoffSet(yaxis))
            console.log('home unmount' +  yaxis)
        }
    }, []);

    const onAddProduct = item => {
        dispatch(updateCart({item, type: 'ADD'}))
    }

    const onRemoveProduct = item => {
        dispatch(updateCart({item, type: 'REMOVE'}))
    }

    return (
        <div>
            <div className = "cardwrapper" >
                {products ?<> {products.map(
                    (product) =>{ return (
                        <ItemCard   
                            key={product.id}
                            item = {product}
                            onAddProduct={onAddProduct}
                            onRemoveProduct={onRemoveProduct}
                        />)
                    }
                )}</> : <></>}
            </div>
        </div>
    )

}


export default Home 