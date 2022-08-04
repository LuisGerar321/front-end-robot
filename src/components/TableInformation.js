import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { handleConnect, handleRequest } from "../services/request";
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import RouterIcon from '@mui/icons-material/Router';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SimpleModal({connection, ipToConnect, setIpConnection}) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const handleOpen = () => {
        const url = `http://${ipToConnect}/api/arduino/`;
        console.log("myUrl:", url);
        setLoading(true);
        axios.get(url).then((res) => {
          console.log(res);
          setOpen(true);
          handleConnect(setData, ipToConnect);
          setIpConnection(ipToConnect);
          setLoading(false);
        }).catch((err) => {
          alert(`Cannot be able to stablish a ssh connection with ${url.slice(0, url.indexOf("/api"))}`);
          setLoading(false);
        })
    };
    const handleClose = () => {
        setOpen(false);
        connection(true);
    };
    return (
        <div style={{margin: "10px"}}>
            <Button  disabled = {!(ipToConnect.length > 5) || loading == true} variant="contained" color="error" onClick={handleOpen}>
              <LeakAddIcon style={{paddingRight: "10px"} }/>   
              Connect       
              <RouterIcon  style={{paddingLeft: "10px"}}></RouterIcon>   
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {data.data?.manufacturer ?? ""}
                </Typography>
                
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {data.message}
                  <br></br>
                  <br></br>
                  Serial Number: {data.data?.serialNumber ?? ""}
                </Typography>
              </Box>
            </Modal>
        </div>
    );
}