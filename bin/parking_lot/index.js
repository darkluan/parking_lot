const fs = require('fs');
const ParkingLot = require('./parking_lot');
function main() {
    try {
        let data = fs.readFileSync(__dirname + '/file_inputs.txt', 'utf8');
        let cmdData = data.toString().split("\n");
        let parkingLot = null;
        cmdData.forEach(item => {
            let cmd = item.split(' ')
            if (cmd[0] === 'create_parking_lot') {
                parkingLot = new ParkingLot(+cmd[1]);
            } else if (cmd[0] === 'park' && ParkingLot !== null) {
                parkingLot.parkACar(cmd[1]);
            } else if (cmd[0] === 'leave' && ParkingLot !== null) {
                parkingLot.removeACar(cmd[1], +cmd[2])
            } else if (cmd[0] === 'status' && ParkingLot !== null) {
                parkingLot.statusParkingSlot();
            }
        })
    } catch (e) {
        console.log('Error:', e);
    }
}
module.export = main();