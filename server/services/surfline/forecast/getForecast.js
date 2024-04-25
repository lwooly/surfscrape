import axios from "axios";
import createSurflineEndpoint from "./forecastFns/createSurflineEndpoint.js";

//get all spots from surfline

// fetch the surfline forecast
const fetchSurflineForecast = async (spotId) => {
    const forecastEndpoint = createSurflineEndpoint(spotId);
    try {
        const response = await axios.get(forecastEndpoint, { timeout: 10000 })
        // return condition forecast only
        // console.log(response.data.data.conditions)
        return response.data.data.conditions
    } catch (error) {
        throw error
    }
}

export default fetchSurflineForecast;
