import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CloseIcon  style={{cursor:"pointer"}} onClick ={props.CloseModal}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {props?.modalData?.title}
          </Typography>
          <iframe 
          style={{width:"100%",height:"420px"}}
            src={props?.modalData?.videoUrl}>
          </iframe>
        </Box>
      </Modal>
    </div>
  );
}