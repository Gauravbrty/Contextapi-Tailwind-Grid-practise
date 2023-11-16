import * as React from 'react';
import { useState,useEffect } from 'react';
import Axios from 'axios'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmiCal from '../EmiCalci/EmiCalci';
import ShoppingCart from "../Shoppingcart/ShoppingCart";
import TableView from '../Table/TableView';
import VideoGallery from '../VideoGallery/videoGallery';
import LoginPage from '../Api_login/loginPage';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const[data, settableData] = useState();
  useEffect(()=>{
Axios.get("http://localhost:5000/table").then((res)=>
{settableData(res.data)});
  },[]);

  const [modalData,setModalData] = useState({
    col1:"",
    col2:"",
    col3:"",
    col4:"",
    col5:"",
  })
  const handleSubmit = () => {
Axios.post("http://localhost:5000/table",{...modalData}).then((res)=>{
  console.log(res);
  settableData(res.data);
})
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Emi Cal" {...a11yProps(0)} />
          <Tab label="Shopping Cart" {...a11yProps(1)} />
          <Tab label="React Table" {...a11yProps(2)} />
          <Tab label="Video Gallery" {...a11yProps(3)} />
          <Tab label="Kanban Board" {...a11yProps(4)} />
          <Tab label="API" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EmiCal/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ShoppingCart/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TableView data={data} modalData={modalData} setModalData={setModalData} handleSubmit={handleSubmit}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <VideoGallery/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <div>
        Hii this is kanban Board
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
     <LoginPage/>
      </CustomTabPanel>
    </Box>
  );
}
