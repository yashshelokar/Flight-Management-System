import React, { Component } from 'react'
import flightService from '../services/FlightServices'

class ListFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                flights: []
        }
        this.addFlight = this.addFlight.bind(this);
        this.editflight = this.editflight.bind(this);
        this.deleteflight = this.deleteflight.bind(this);
    }

    deleteflight(id){
        flightService.deleteflight(id).then( res => {
            this.setState({flights: this.state.flights.filter(flight => flight.id !== id)});
        });
    }
    viewflight(id){
        this.props.history.push(`/view-flight/${id}`);
    }
    editflight(id){
        this.props.history.push(`/add-flight/${id}`);
    }

    componentDidMount(){
        flightService.getflights().then((res) => {
            this.setState({ flights: res.data});
        });
    }

    addFlight(){
        this.props.history.push('/add-flight/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">flights List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFlight}> Add flight</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> flight Arrival Time</th>
                                    <th> flight Departure Time</th>
                                    <th> flight Gate No</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.flights.map(
                                        flight => 
                                        <tr key = {flight.id}>
                                             <td> { flight.ArrivalTime} </td>   
                                             <td> {flight.DepartureTime}</td>
                                             <td> {flight.gateNo}</td>
                                             <td>
                                                 <button onClick={ () => this.editflight(flight.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteflight(flight.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewflight(flight.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListFlightComponent