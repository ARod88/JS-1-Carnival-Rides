let ride1PowerOn = false;
let ride2PowerOn = false;
let ride3PowerOn = false;
let ride4PowerOn = false;
let greenWireConnected = true;
let yellowWireConnected = true;
let redWireConnected = true;
let waterIsOn = true;

// Power on Ride 1 if green wire is connected
if (greenWireConnected) {
  ride1PowerOn = true;
}

// Power on Ride 2 if green and yellow wires are connected
if (greenWireConnected && yellowWireConnected) {
  ride2PowerOn = true;
}

// Power on Ride 3 if green and red wires are connected, water is on, and yellow wire is not connected
if (greenWireConnected && redWireConnected && waterIsOn && !yellowWireConnected) {
  ride3PowerOn = true;
}

// Power on Ride 4 if ride wire is connected
if (ride4PowerOn) {
  ride4PowerOn = true;
}

// Define the ride4SlotMachine function to return a prize based on the rolled number
function ride4SlotMachine(rolledNumber){
    
  switch (rolledNumber) {
    case 1:
      return "star";
    case 2:
      return "car";
    case 3:
      return "pot of gold";
    case 4:
      return "clover";
    case 5:
      return "bowling ball";
    case 6:
      return "tiger";
    case 7:
      return "seven";
    default:
      break;return "nothing"
  }
}