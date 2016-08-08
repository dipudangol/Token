const buttons=[
{"identifier":"old-registration","name":"Old-Registration"},
{"identifier":"vibek","name":"shrestha"},
{"identifier":"new-registration","name":"New Registration"},
{"identifier":"Sudeep","name":"Shrestha"}
];

class ButttonApi {
  static getAllButtons() {
    return new Promise((resolve, reject) => {
        resolve(Object.assign([], buttons));
    });
  }
}

export default ButttonApi;


