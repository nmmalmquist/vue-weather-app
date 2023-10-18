import key from "./key"
import axios from "axios"
import type { WeatherForecast } from "./types/WeatherForecast"

export const getTodaysForecast = async(place: string) => {
  const queryString = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&days=2&aqi=no&alerts=no`
  return axios.get<WeatherForecast>(queryString)
}