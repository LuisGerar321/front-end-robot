
// import { Button } from '@mui/material'
import React, { useState } from 'react'
import "../style/mystyles.css"

import {default as LeftUp} from '@mui/icons-material/NorthWest';
import {default as Up } from '@mui/icons-material/North';
import {default as RigthUp} from '@mui/icons-material/NorthEast';
import {default as Left} from '@mui/icons-material/West';
import {default as Spin} from '@mui/icons-material/Autorenew';
import {default as Rigth} from '@mui/icons-material/East';
import {default as LeftDown} from '@mui/icons-material/SouthWest';
import {default as Down} from '@mui/icons-material/South';
import {default as RigthDown} from '@mui/icons-material/SouthEast';
import IconButton from '@mui/material/IconButton';
import { handleDown, handleLeft, handleLeftDown, handleLeftUp, handleRight, handleRightDowm, handleRightUp, handleSpin, handleStop, handleUp } from '../services/request';
import { Slider } from '@mui/material';
// import { Button } from 'react-native';
// import { Button } from '@mui/material';

export const ControlRemote = ({ipConnection}) => {
  const [PWM, setPWM] = useState(150);

  const handleSlider = (event) => {
    setPWM(event.target.value);
    console.log(PWM);
  };

  return (
      <div className='container'> 
        <Slider onChange={handleSlider} onTouchStart={ handleSlider} defaultValue={150} aria-label="Default" valueLabelDisplay="auto" max={255} />
        <div className = "game-board">
          <div className= "cell">
            <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleLeftUp(ipConnection, PWM)} }>
              <LeftUp style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></LeftUp>
            </IconButton>
            
          </div>
          <div className='cell'>
          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleUp(ipConnection, PWM)} }>
            <Up style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></Up>
          </IconButton>
          </div>

          
          <div className='cell'>
          <IconButton color = "info"  onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleRightUp(ipConnection, PWM)} }>
            <RigthUp style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></RigthUp>
          </IconButton>

          </div>

          <div className='cell'>
          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleLeft(ipConnection, PWM)} }>
            <Left style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></Left>
          </IconButton>

          </div>


          <div className='cell'>
          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleSpin(ipConnection, PWM)} }>
            <Spin style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></Spin>         
          </IconButton>
          </div>


          <div className='cell'>

          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleRight(ipConnection, PWM)} }>
            <Rigth style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></Rigth>
          </IconButton>

          </div>


          <div className='cell'>

          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleLeftDown(ipConnection, PWM)} }>
            <LeftDown style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></LeftDown>  
          </IconButton>

          </div>

          <div className='cell'>

          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleDown(ipConnection, PWM)} }>
            <Down style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></Down>
          </IconButton>
          </div>


          <div className='cell'>

          <IconButton color = "info" onTouchEnd={() => {handleStop(ipConnection)}} onTouchStart={() => { handleRightDowm(ipConnection, PWM)} }>
            <RigthDown style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px'}}></RigthDown>     
          </IconButton>
          </div>

        </div>
      </div>
  )
}
