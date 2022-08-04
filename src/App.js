 import './App.css';

 import Button from "@mui/material/Button"
 import {React, useState} from "react";
import SimpleModal from './components/TableInformation';
import { ControlRemote } from './components/ControlRemote';
import { Console } from './components/Console';
import { TextField } from '@mui/material';
import { ConsoleModal } from './components/ConsoleModal';
import IconMenu from './components/Menu';

// const ip = "192.168.0.64";

function App() {
  const [connection, setConnection] = useState(false);
  const [ipConnection, setIpConnection] = useState("");
  const handleSetIpConnection = (event) => {
    setIpConnection(event.target.value);
    console.log("event: ", event.target.value);
    console.log("currentIpConnection",  ipConnection);
  };
  return (
    <div className="App">
      {/* {connection && (<IconMenu ipConnection={ipConnection}></IconMenu>)} */}
      <header className="App-header">
        {!connection && (<TextField onChange={handleSetIpConnection} label="Raspberry IP Address" color="success" focused />)}
        {connection && (<Console ipToConnect= {ipConnection}></Console>)}
        {/* {connection && (<ConsoleModal ipConnection= {ipConnection} ></ConsoleModal>)} */}
        {connection && <br/>}
        {connection && (<ControlRemote ipConnection={ipConnection}></ControlRemote>)}
        {!connection && (<SimpleModal connection={setConnection} ipToConnect={ipConnection} setIpConnection = {setIpConnection}/>)}
      </header>      
    </div>
  );
}

export default App;
