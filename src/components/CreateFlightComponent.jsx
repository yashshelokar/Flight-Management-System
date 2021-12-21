import React, { Component } from 'react'
import FlightService from '../services/FlightServices';

class CreateFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            ArrivalTime: '',
            DepartureTime: '',
            GateNo: ''
        }
        this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
        this.changeDepartureTimeHandler = this.changeDepartureTimeHandler.bind(this);
        this.saveOrUpdateFlight = this.saveOrUpdateFlight.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FlightService.getFlightById(this.state.id).then( (res) =>{
                let Flight = res.data;
                this.setState({ArrivalTime: Flight.ArrivalTime,
                    DepartureTime: Flight.DepartureTime,
                    GateNo : Flight.GateNo
                });
            });
        }        
    }
    saveOrUpdateFlight = (e) => {
        e.preventDefault();
        let Flight = {ArrivalTime: this.state.ArrivalTime, DepartureTime: this.state.DepartureTime, GateNo: this.state.GateNo};
        console.log('Flight => ' + JSON.stringify(Flight));

        // step 5
        if(this.state.id === '_add'){
            FlightService.createFlight(Flight).then(res =>{
                this.props.history.push('/Flights');
            });
        }else{
            FlightService.updateFlight(Flight, this.state.id).then( res => {
                this.props.history.push('/Flights');
            });
        }
    }
    
    changeArrivalTimeHandler= (event) => {
        this.setState({ArrivalTime: event.target.value});
    }

    changeDepartureTimeHandler= (event) => {
        this.setState({DepartureTime: event.target.value});
    }

    changeGateNoHandler= (event) => {
        this.setState({GateNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/Flights');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Flight</h3>
        }else{
            return <h3 className="text-center">Update Flight</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Arrival Time: </label>
                                            <input placeholder="Arrival Time" name="ArrivalTime" className="form-control" 
                                                value={this.state.ArrivalTime} onChange={this.changeArrivalTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Departure Time: </label>
                                            <input placeholder="Departure Time" name="DepartureTime" className="form-control" 
                                                value={this.state.DepartureTime} onChange={this.changeDepartureTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gate No: </label>
                                            <input placeholder="Gate No" name="GateNo" className="form-control" 
                                                value={this.state.GateNo} onChange={this.changeGateNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFlight}>Save</button>
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

export default CreateFlightComponent