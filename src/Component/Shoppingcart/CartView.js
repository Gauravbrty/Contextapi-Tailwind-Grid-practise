import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import "../../App.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ShopViewCard from './ShopViewCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MediaCard(props) {
  console.log(props.Data, "data")
  const [cartProducts, setCartProducts] = useState([]);
  const handleAddCart = (item) => {
    setCartProducts((prev) => [...prev, item]);
  };
  const initialValue = 0;
  const TotalAmount =
  props.cartProducts &&
  props.cartProducts?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
        <div>
        <h1>Total items : {props.cartProducts.length}
            </h1>
            <h1>Total Amount : {Math.round(TotalAmount)}
            </h1>
        </div>
        <Grid container>
      {props.cartProducts && props.cartProducts.map((item, index) => {
        return (
            <Grid xs={3} key = {index}>
          <Box sx={{ flexGrow: 1 }}>
                <Card sx={{ width:"200px", height:"400px",margin:"20px" }}>
                  <CardActionArea>
                    <div className='w-200 h-200'>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="green iguana"
                      sx={{height:"200px", maxHeight:"200px"}}
                    />
                    </div>
                    <CardContent sx={{height:"130px",maxHeight:"130px"}}>
                      <Typography gutterBottom variant="h7" component="div">
                        {item.title}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                  <CardActions className='flex-auto flex-col'>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        props.DeleteData(item.id);
                      }}
                    >
                      Remove From Cart
                    </Button>
                  </CardActions>
                </Card>
          </Box>
          </Grid>

        )
      })}
        </Grid>
    </div>
  );
}