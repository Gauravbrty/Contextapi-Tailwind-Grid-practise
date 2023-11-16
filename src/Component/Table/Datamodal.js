import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({modalData,setModalData,handleSubmit}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const handleChange = (evt) =>{
    const value = evt.target.value;
    setModalData({
        ...modalData,
        [evt.target.name]: value
      });
}
console.log(modalData,"modalData")

 
  return (
    <div>
      <Button onClick={handleOpen}>Add Data To the Table</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="City Name" variant="outlined" name='col1'onChange={handleChange}/>
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Temprature" variant="outlined" name='col2' onChange={handleChange} />
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Weather Forcast" variant="outlined" name='col3' onChange={handleChange} />
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Pressure" variant="outlined" name='col4' onChange={handleChange} />
        </div>
        <div className='CardContent'>
        <TextField id="outlined-basic" label="Humidity" variant="outlined" name='col5' onChange={handleChange} />
        </div>
        <div className='CardContent'>
        <Button variant="contained" onClick={handleSubmit} >Upload Data</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
