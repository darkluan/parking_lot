const ParkingLot = require('./../parking_lot/parking_lot');
let parkingLot = new ParkingLot(6);

test('Park a car', () => {
    let parkArray = ['KA-01-HH-1234', null, null, null, null, null]
    parkingLot.parkACar('KA-01-HH-1234')
    expect(parkingLot.parkArray).toEqual(parkArray);
});

test('Parking lot is full', () => {
    parkingLot.parkArray = ['KA-01-HH-1', 'KA-01-HH-2', 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    let newParkArray = ['KA-01-HH-1', 'KA-01-HH-2', 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    parkingLot.parkACar('KA-01-HH-7')
    expect(parkingLot.parkArray).toEqual(newParkArray);
});

test('Remove a car', () => {
    parkingLot.parkArray = ['KA-01-HH-1', 'KA-01-HH-2', 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    let newParkArray = ['KA-01-HH-1', null, 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    parkingLot.removeACar('KA-01-HH-2', 4)
    expect(parkingLot.parkArray).toEqual(newParkArray);
});

test('Registration number not found', () => {
    parkingLot.parkArray = ['KA-01-HH-1', 'KA-01-HH-2', 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    let newParkArray = ['KA-01-HH-1', 'KA-01-HH-2', 'KA-01-HH-3', 'KA-01-HH-4', 'KA-01-HH-5', 'KA-01-HH-6']
    parkingLot.removeACar('KA-01-HH-7', 4)
    expect(parkingLot.parkArray).toEqual(newParkArray);
});

test('Calculate parking time ', () => {
    expect(parkingLot.calculateParkingHours(2)).toEqual(10);
    expect(parkingLot.calculateParkingHours(4)).toEqual(30);
});

