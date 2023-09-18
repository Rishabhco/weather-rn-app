import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = params=> `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint = params=> `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint,
    };
      try{
        const response = await axios.request(options);
        return response.data;
      }catch(error){
        console.log('error: ',error);
        return {};
    }
}

const fetchWeatherForecast = (params)=>{
    let forecastUrl = forecastEndpoint(params);
    console.log(apiCall(forecastUrl));
    // return apiCall(forecastUrl);
}

const fetchLocations = (params)=>{
    let locationsUrl = locationsEndpoint(params);
    console.log(apiCall(locationsUrl));
    // return apiCall(locationsUrl);
}

module.exports={
    fetchWeatherForecast,
    fetchLocations
}