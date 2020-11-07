import React from 'react'
import {AppBar } from '@material-ui/core'
import '../styles/Nav.css'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

export default  function Nav (props){
    const history = useHistory();
    return (
        <div className = "Bar">
            <Typography className="NavText">
            <Link onClick={() => history.push('/')} style={{ cursor: 'pointer', color: 'white'}}>
                Home
            </Link>
            <Link onClick={() => history.push('/cart')} style={{ cursor: 'pointer', color: 'white', marginLeft: 20}} >
                Cart
            </Link>
            </Typography>
        </div>
    )
}