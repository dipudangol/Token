import $ from 'jquery';

class OnclickApi {
  static clickButtons() {
    return new Promise((resolve, reject) => {
      $.post("http://192.168.5.120:8080/dispenser/RTS-NP/RealTimes/dispenser/services", (data) => {
        resolve(Object.assign([],data));
      });
    });
  }
}

export default OnclickApi;
