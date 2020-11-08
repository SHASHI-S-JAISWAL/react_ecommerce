import React from 'react'
import '../styles/Nav.css'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default  function Nav (props){
    const cartItems =  useSelector (state => state.cartItems)
    const currentPage =  useSelector (state => state.currentPage)
    let yOffset = useSelector (state => state.yOffset  )
    const history = useHistory();
    return (
        <div className = "Bar">
            <Typography className="NavText">
            <Link onClick={() => history.push('/')} style={{ cursor: 'pointer', color: 'white'}}>
                Home
            </Link>
            {currentPage !='cart'?
            <Link onClick={() => history.push('/cart')} style={{ cursor: 'pointer', color: 'white', marginLeft: 20}} >
                Cart ({cartItems.length})
            </Link>
            :<></>}
            </Typography>
        </div>
    )
}