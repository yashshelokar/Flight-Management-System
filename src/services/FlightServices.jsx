import axios from 'axios';

const Flight_API_BASE_URL = "http://localhost:8080/api/v1/Flights";

class FlightService {

    getFlights(){
        return axios.get(Flight_API_BASE_URL);
    }

    createFlight(Flight){
        return axios.post(Flight_API_BASE_URL, Flight);
    }

    getFlightById(FlightId){
        return axios.get(Flight_API_BASE_URL + '/' + FlightId);
    }

    updateFlight(Flight, FlightId){
        return axios.put(Flight_API_BASE_URL + '/' + FlightId, Flight);
    }

    deleteFlight(FlightId){
        return axios.delete(Flight_API_BASE_URL + '/' + FlightId);
    }
}

export default new FlightService()