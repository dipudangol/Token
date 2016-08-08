const buttons= [
  {
    "auditable_id": 18,
    "site_id": 2,
    "identifier": "deposit",
    "name": "deposit",
    "prefix": "A",
    "carry_over": false
  },
  {
    "auditable_id": 19,
    "site_id": 2,
    "identifier": "withdraw",
    "name": "withdraw",
    "prefix": "C",
    "carry_over": false
  },
  {
    "auditable_id": 20,
    "site_id": 2,
    "identifier": "remittance",
    "name": "remittance",
    "prefix": "E",
    "carry_over": false
  }
];


class ButttonApi {
  static getAllButtons() {
    return new Promise((resolve, reject) => {
        resolve(Object.assign([], buttons));

    });
  }
}

export default ButttonApi;
