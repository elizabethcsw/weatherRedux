import axios from 'axios';
const API_KEY = 'd33204696ff28be3ace87e617b5cad88'
const rootURL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "FETCH_WEATHER"


export function fetchWeather(){
  const url = `${rootURL}&q=${city},us`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
