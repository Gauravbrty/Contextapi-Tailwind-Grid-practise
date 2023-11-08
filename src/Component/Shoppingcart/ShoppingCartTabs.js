import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext,useState } from 'react';
// import ShoppingCard from "./ShoppingCard";
import ShoppingViewCard from './ShopViewCard';
import CartView from './CartView';
import CircularProgress from '@mui/material/CircularProgress';
import {ProductContext} from '../ContextAPI/product-context'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const {products,loading} = React.useContext(ProductContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 


  return (
    loading == true? ( 
    <Box sx={{ display: 'flex', flexDirection:"column", alignItems:"center" }}>
    <CircularProgress />
  </Box>):
  (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ItemView" {...a11yProps(0)} />
          <Tab label="CartItems" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ShoppingViewCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CartView />
      </CustomTabPanel>
    </Box>)
  );
}
