import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const buttons = [
  {
    id: 1,
    color: 'Green',
    name: 'Pay-bill'
  },
  {
    id: 2,
    color: 'Yellow',
    name: 'Inquiry'
  },
  {
    id: 3,
    color: 'Red',
    name: 'Complain'
  }
];


class ButttonApi {
  static getAllButtons() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], buttons));
      }, delay);
    });
  }
}

export default ButttonApi;
