import React from 'react'
import {AppBar } from '@material-ui/core'
import '../styles/Nav.css'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default  function Nav (props){
    
    return (
        // <AppBar position="fixed"></AppBar>
        <div className = "Bar">
            <Typography className="NavText">
            <Link href="/">
                Home
            </Link>
            <Link href="/cart" >
                Cart
            </Link>
            </Typography>
        </div>
    )
}