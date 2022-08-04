// export function handleAutomatic (ipConnection, automatic) {
//   const motor = `http://${ipConnection}/api/arduino/`;
//   const timeOuts  = [];
//   const timeIntervals = [];
//   const minDistance = 20;
//   const PWM = 180;

//   return async function() {
//     const sensors = await axios.get(motor);
//     const distanceObject = sensors.data.data.ultrasonic;

//     if (!automatic) {
//       timeOuts.forEach(timeOutId => clearTimeout(timeOutId));
//       return;
//     }

//     if (distanceObject>minDistance) {
//       await handleUp(ipConnection, this.PWM)
//     } else {
//       let count = 0;

//       const tInterval =setInterval(async () => {
//         if (timeIntervals.length > 10 && distanceObject > minDistance){
//           timeIntervals.forEach(idInterval => clearInterval(idInterval));
//           return;
//         }
//         await handleSpin(ipConnection, this.PWM);
//         if (count >= 10) {
//             clearInterval(tInterval);
//         }
//         count++;
//       }, 100);
//       timeIntervals.push(tInterval);
//     }


//     const t = setTimeout(() => {
//       handleAutomatic(ipConnection, PWM, automatic)
//     }, 255);
//     this.timeOuts.push(t);
//   }
// }