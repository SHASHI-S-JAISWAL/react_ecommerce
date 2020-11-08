import React,{useState} from "react";
import { makeStyles,withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../styles/Cart.css'
import { Select } from "@material-ui/core";
 
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow : "none",
    display: "flex",
    flex:"1",
    width :"100%",
    padding: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 100,
    height: 100,
    padding: 10
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const {item, setItemQuantity} = props
  const {id, name, price, cartQuantity, imageUrl, unit} = item;

  const handleChange = (event) =>{
    setItemQuantity({ quantity: event.target.value, itemId: id })
  }
  const remove = (event) =>{
    setItemQuantity({ quantity: 0, itemId: id })
  }
  return (
    <div className ="cardflat">
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image= {imageUrl}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              { name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            1 {unit}
            </Typography>
            <div className="cartbuton">
              <FavoriteBorderIcon />
              <Typography   size ="small" style={{fontSize:"0.85em",paddingLeft:"5px"}}>
              MOVE TO WISHLIST
              </Typography>
              <Button onClick={remove}>X  Remove</Button>
            </div>
          </CardContent>
        </div>
      </Card>
      <div className="cartsel">
        <NativeSelect
          id="select"
          value={cartQuantity}
          onChange={handleChange}
        >
          {Array(20).fill(null).map((_, index) => <option value={index+1}>{index+1}</option>)}
        </NativeSelect>
      </div>
      <div className="cartrate">
        <Typography variant="subtitle1" color="textSecondary">
          {price}
        </Typography>
      </div>
      <div className="cartrate">
        <Typography variant="subtitle1" color="textSecondary">
          {price * cartQuantity}
        </Typography>
      </div>
    </div>
  );
}
