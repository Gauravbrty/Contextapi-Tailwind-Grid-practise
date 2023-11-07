import * as React from 'react';
import { useState } from 'react';
import "./../../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
   props.setCartProducts((prev) => [...prev, item]);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div style={{display: "flex",flexDirection: "row-reverse"}}>
      < ShoppingCartIcon /> {props.cartProducts.length}
      </div>
      <Grid container>
      {props.Data && props.Data.map((item, index) => {
     
        return (
          <Grid item  xs={3} key = {index}>
          <Box sx={{ flexGrow: 1 }}>
           
                <Card sx={{ width:"200px", height:"400px",margin:"20px"}}>
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
                      <Typography gutterBottom variant="h7" >
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
                        handleAddCart(item);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
             
          </Box>
          </Grid>
        )
      
      })
    

      }
        </Grid>
    </div>
  );
}