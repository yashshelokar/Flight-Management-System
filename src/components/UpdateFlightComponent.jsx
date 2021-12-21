import React, { Component } from 'react'
import FlightService from '../services/FlightServices';

class UpdateFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ArrivalTime: '',
            DepartureTime: '',
            GateNo: ''
        }
        this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
        this.changeDepartureTimeHandler = this.changeDepartureTimeHandler.bind(this);
        this.updateFlight = this.updateFlight.bind(this);
    }

    componentDidMount(){
        FlightService.getFlightById(this.state.id).then( (res) =>{
            let Flight = res.data;
            this.setState({ArrivalTime: Flight.ArrivalTime,
                DepartureTime: Flight.DepartureTime,
                GateNo : Flight.GateNo
            });
        });
    }

    updateFlight = (e) => {
        e.preventDefault();
        let Flight = {ArrivalTime: this.state.ArrivalTime, DepartureTime: this.state.DepartureTime, GateNo: this.state.GateNo};
        console.log('Flight => ' + JSON.stringify(Flight));
        console.log('id => ' + JSON.stringify(this.state.id));
        FlightService.updateFlight(Flight, this.state.id).then( res => {
            this.props.history.push('/Flights');
        });
    }
    
    changeArrivalTimeHandler= (event) => {
        this.setState({ArrivalTime: event.target.value});
    }

    changeDepartureTimeHandler= (event) => {
        this.setState({DepartureTime: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({GateNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/Flights');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Flight</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="ArrivalTime" className="form-control" 
                                                value={this.state.ArrivalTime} onChange={this.changeArrivalTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="DepartureTime" className="form-control" 
                                                value={this.state.DepartureTime} onChange={this.changeDepartureTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="GateNo" className="form-control" 
                                                value={this.state.GateNo} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateFlight}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateFlightComponent