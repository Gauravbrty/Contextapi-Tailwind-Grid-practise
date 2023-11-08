import React, { useState } from 'react'
import VideoData from './mediaData'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MoalPlayer  from "./modalPlayer";
import '../../App.css'

const VideoCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const[modalData, setModalData] = useState();
    console.log(modalData,"modalData")
    const openModal = (item) => {
        console.log(item,"item");
        setModalOpen(true);
        setModalData(item);
    }
    const CloseModal = () => {
        setModalOpen(false);
    }
  
    return(
        <div>
            <Grid container>
                { VideoData.map((item,index)=>{
                        return(
                            <Grid item  xs={2} sm={4} md={4} key={index}>
                                 <Box sx={{ flexGrow: 1, padding:"20px" }}>
                                <item>
                                    <div onClick={()=>openModal(item)}>
                                        <img
                                        className='Video_Player_image'
                                        src={item.thumbnailUrl}
                                        />
                                        <span>{item.title}</span>
                                     </div>
            </item>
            </Box>
            </Grid>
                        )
                    })}
                    </Grid>
                    <MoalPlayer open={modalOpen} CloseModal={CloseModal} modalData={modalData}/>
     </div>
    )
   

}


export default VideoCard;