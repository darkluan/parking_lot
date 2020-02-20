class ParkingLot {
    constructor(availiableLot) {
        this.availiableLot = availiableLot;
        this.parkArray = [];
        console.log(`Created parking lot with ${availiableLot} slots`);
        this.init()
    }

    init() {
        for (let i = 0; i < this.availiableLot; i++) {
            console.log(`Allocated slot number: ${i + 1}`)
            this.parkArray.push(null)
        }
    }

    parkACar(carNumber) {
        for (let i = 0; i < this.availiableLot; i++) {
            if (this.parkArray[i] === null) {
                this.parkArray[i] = carNumber;
                break;
            } else if (this.parkArray.indexOf(null) === -1) {
                console.log('Sorry, parking lot is full \nSlot No. Registration No.');
                break;
            }
        }
    }

    removeACar(carNumber, hours) {
        let existCar = this.parkArray.indexOf(carNumber)
        if (existCar !== -1) {
            this.parkArray[existCar] = null;
            let fee = this.calculateParkingHours(hours);
            console.log(`Registration number ${carNumber} with Slot Number ${existCar + 1} is free with Charge ${fee}`);
        } else {
            console.log(`Registration number ${carNumber} not found`);
            for (let i = 0; i < this.availiableLot; i++) {
                if (this.parkArray[i] === null) console.log(`Allocated slot number: ${i + 1}`)
            }
        }
    }

    calculateParkingHours(hours) {
        let fee = 10;
        let hoursDefault = 2;
        let result = fee;
        if (hours > hoursDefault) {
            result = fee + Math.ceil(hours - hoursDefault) * fee;
        }
        return result;
    }

    statusParkingSlot() {
        for (let i = 0; i < this.availiableLot; i++) {
            if (this.parkArray[i] !== null) {
                console.log(`${i + 1}  ${this.parkArray[i]}`)
            } else {
                console.log(`Allocated slot number: ${i + 1}`)
            }
        }
    }
}

module.exports = ParkingLot; 