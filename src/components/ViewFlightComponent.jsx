import React, { Component } from 'react'
import FlightService from '../services/FlightService'

class ViewFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Flight: {}
        }
    }

    componentDidMount(){
        FlightService.getFlightById(this.state.id).then( res => {
            this.setState({Flight: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Flight Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Flight Arrival Time: </label>
                            <div> { this.state.Flight.ArrivalTime }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Departure Time: </label>
                            <div> { this.state.Flight.DepartureTime }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Gate No: </label>
                            <div> { this.state.Flight.gateNo }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFlightComponent