import axios from "axios";
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';




const up = (velocity) => {
  return {    
    motor1: velocity,
    motor2: velocity,
    motor3: velocity,
    motor4: velocity,
  }
}

const down = (velocity) => {
  return {
    motor1: velocity*-1,
    motor2: velocity*-1,
    motor3: velocity*-1,
    motor4: velocity*-1,
  }
}

const stop = (velocity) => {
  return {
    motor1: 0,
    motor2: 0,
    motor3: 0,
    motor4: 0,
  }
}

const rigth = (velocity)  => {
  return {
    motor1: velocity * -1,
    motor2: velocity,
    motor3: velocity * -1,
    motor4: velocity,
  }
}

const left =  (velocity) => {
  return {
    motor1: velocity,
    motor2: velocity* -1,
    motor3: velocity,
    motor4: velocity* -1,
  }
}

const leftUp = (velocity) => {
  return {
    motor1: 0,
    motor2: velocity,
    motor3: 0,
    motor4: velocity,
  }
}

const rigthUp = (velocity) => {
  return {
    motor1: velocity,
    motor2: 0,
    motor3: velocity,
    motor4: 0,
  }
}

const leftDown = (velocity) => {
  return {
    motor1: velocity * -1,
    motor2: 0,
    motor3: velocity * -1,
    motor4: 0,
  }
}

const rigthDown = (velocity) => {
  return {
    motor1: 0,
    motor2: velocity* -1,
    motor3: 0,
    motor4: velocity* -1,
  }
}

const spin = (velocity) => {
  return {
    motor1: velocity,
    motor2: velocity* -1,
    motor3: velocity * -1,
    motor4: velocity,
  }
}

export const handleRequest = async (setState, ipConnection) => {
  const configSerialPort = `http://${ipConnection}/api/arduino/config/serialPort`;
  axios.get(configSerialPort).then((data) => {
    console.log(data.data);
    setState(data.data)
  });
}

export const handleConnect = async (setConnection, ipConnection) => {
  const connectSerialPort = `http://${ipConnection}/api/arduino/config/connectSerialPort`;
  axios.get(connectSerialPort).then((res) => {
    console.log(res.data);
    setConnection(res.data)
  });
}

export const handleUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, up(PWM)).then((res) => {
    console.log(res.data);
  });
}

export const handleDown = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, down(PWM)).then((res) =>{
    console.log(res.data);
  });
}

export const handleLeft = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, left(PWM));
}

export const handleRight = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigth(PWM));
}

export const handleLeftUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, leftUp(PWM));
}

export const handleLeftDown = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, leftDown(PWM));
}

export const handleRightUp = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigthUp(PWM));
}

export const handleRightDowm = async (ipConnection,PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, rigthDown(PWM));
}

export const handleSpin = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, spin(PWM));
}

export const handleStop = async (ipConnection, PWM) => {
  const motor  = `http://${ipConnection}/api/arduino/`;
  await axios.post(motor, stop(PWM)).then((res) => { console.log(res.data)});
}

export function handleAutomatic (ipConnection, automatic) {
  const motor = `http://${ipConnection}/api/arduino/`;

  const minDistance = 20;
  const maxSteps =  100;
  const PWM = 180;

  const t = setInterval(async () => {
    const sensors = await axios.get(motor);
    const objectDistance = sensors.data.data.ultrasonic;
    let steps = 0;

    if (!automatic) clearInterval(t);

    if (objectDistance < minDistance) {
      const spin = setInterval(async () =>{
        const sensors = await axios.get(motor);
        const objectDistance = sensors.data.data.ultrasonic;

        if (objectDistance >=  minDistance && steps > maxSteps  ) clearInterval(spin);

        await handleSpin(ipConnection, PWM);
        steps++;
      }, 10);
    }
    
  }, 255);
}

let interval;
export const handleGetInfo = async (setMotorEncoders,  ipConnection) => {
  console.log(ipConnection);
  const motor  = `http://${ipConnection}/api/arduino/`;
  clearInterval(interval)
  interval = setInterval(() => {axios.get(motor).then((res) => {setMotorEncoders(res.data.data); console.log(res.data.data);}).catch(  )}, 250);
}


