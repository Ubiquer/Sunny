import axios from 'axios';

export class ApiClient {
static getWeather() {
    return new Promise((resolve, reject) => {
      axios.get('https://api.openweathermap.org/data/2.5/forecast?id=3081368&APPID=bd2083e46d82c04f005517127292b169')
        .then((res) => {
          resolve(res.data);
        });
    });
  }
}