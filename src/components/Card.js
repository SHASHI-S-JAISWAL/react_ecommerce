import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/Home.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    width: 200,
    boxShadow : "none",
    paddingTop : 20,
    paddingLeft : "4%",
    alignContent : "left"
  },
  media: {
    height: 130,
  },
});

export default function ItemCard ({item}) {
  const classes = useStyles();
    console.log(item)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {item.imageUrl}
          title={item.productDescription}
        />
        <CardContent className="cardcontent">
          <Typography  variant="h5" component="h3" className = "cardtitle" style ={{fontSize: "1.1em"}} >
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           1 {item.unit}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      {item.cartQuantity==0 ? 
          <Button size="small" className ="cardbutton" style={{display: "flex",justifyContent:"flex-start",fill: "red",color: "red"}}>
              <AddCircleIcon style={{fill: "red"}}/><Typography component="p">  ADD</Typography>
          </Button>
          :<Typography className="quantity">
            <AddIcon />
            <Typography variant="body2" color="textSecondary" component="p" style ={{fontSize: "1.1em"}}>{item.cartQuantity}</Typography>
            <RemoveIcon />
          </Typography>}
      <CardActions>
      </CardActions>
    </Card>
  );
}
