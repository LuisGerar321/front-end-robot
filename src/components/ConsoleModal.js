import { Button, Modal, Box } from '@mui/material';
import React from 'react'
import { Console } from './Console';
import DvrIcon from '@mui/icons-material/Dvr';


export const ConsoleModal = ({ipConnection}) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };
  return (
      <div style={{margin: "5px",  maxWidth: '25vim', maxHeight: '25vim', minWidth: '25vim', minHeight: '25vim'}}>
          <Button  onClick={handleOpen} >
            <DvrIcon style={{paddingRight: "-10vim", maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'} }>    
            </DvrIcon> 
          </Button>
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
          >
            <Console ipToConnect= {ipConnection}></Console>
            
          </Modal>
      </div>
  );
}
