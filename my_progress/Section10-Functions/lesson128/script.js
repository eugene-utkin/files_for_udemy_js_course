'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  numPassengers = numPassengers || 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
