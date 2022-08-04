import React from 'react'
import { handleGetInfo } from '../services/request'

export const Console = ({ipToConnect}) => {
  const [motorEncoders, setMotorEncoders] = React.useState({init: "Hi payaso"});
  handleGetInfo(setMotorEncoders, ipToConnect);
  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
      <div className="console" onTouchStart={() => {handleChange()}}>
        <header>
          <p>pi@{ipToConnect}</p>
        </header>
        <div className="consolebody">
          <p>{`">>"${JSON.stringify(motorEncoders)}`}</p>
        </div>
      </div>
  )
}
