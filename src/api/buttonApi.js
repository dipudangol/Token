import $ from 'jquery';

class ButtonApi {
  static getAllButtons() {
    return new Promise((resolve, reject) => {
      $.get("http://192.168.5.120:8080/dispenser/RTS-NP/RealTimes/dispenser/services", (data) => {
        resolve(Object.assign([], data));
      });
    });
  }
}

export default ButtonApi;
