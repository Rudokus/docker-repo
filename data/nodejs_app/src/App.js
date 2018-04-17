import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import './App.css';

export const defaultPath = 'http://localhost:81/';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flights: {
        data: [],
      },
      aircrafts: {
        data: [],
      },
      airports: {
        data: [],
      },
      items: {
        data: [],
        pagination: {},
      },
      
      searchLocation: '',
    }
    
  };
  
  componentDidMount() {
    this._load('slotservice', 'flights');
    this._load('airport', 'airports');
    this._load('aircraft', 'aircrafts');
  
    this.setState({items: this.state.flights});
  };
  
  _load = (path, stateName) => {
    axios.get(defaultPath + path)
        .then(res => {
          this.setState({
            [stateName]: res,
          })
          
          // console.log(this.state);
        })
        .catch(error => {
          alert('Fout bij ophalen: ', error);
        })
  };
  
  _filterFlights = () => {
    var updatedList = this.state.flights.data;
    var state = this.state;
    updatedList = updatedList.filter(function(item) {
      return item.slot_service_id.toLowerCase()
          .search(state.searchLocation.toLocaleLowerCase()) !== -1;
    });
    
    this.setState({items: { data: updatedList }});
  };
  
  _findAircraft (id) {
    for(var i in this.state.aircrafts.data) {
      var obj = this.state.aircrafts.data[i];
      
      if (obj.aircraft_id == id) {
        return obj;
      }
    }
    
    return false;
  };
  
  _findAirport (id) {
    for(var i in this.state.airports.data) {
      var obj = this.state.airports.data[i];
      
      if (obj.airport_id == id) {
        return obj;
      }
    }
    
    return false;
  };
  
  _searchLocation = ({ target }) => {
    // console.log(target);
    this.setState(
        {
          searchLocation: target.value,
        },
        () => this._filterFlights()
    )
  };
  
  _selectLocation = searchLocation => {
    // console.log(searchLocation);
    this.setState(
        {
          searchLocation: searchLocation,
        },
        () => this._filterFlights()
    )
  };
  
  _convertTimeStamp = timestamp => {
    var time = new Date(timestamp);
    
    return time.toString();
  };
  
  render() {
    let value = null
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sailbot Airport</h1>

          <div className="container">
            <div className="row justify-content-md-center">
              <h2>Vind je vlucht</h2>
              <form className="col-4">
                <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="destination">
                  Zoek op vluchtnummer
                </label>
                <Autocomplete
                  wrapperProps={{
                    className: 'col-sm-10'
                  }}
                  getItemValue={(item) => item.label}
                  items={this.state.flights.data.map(flight => ({
                    ...flight,
                    label: flight.slot_service_id,
                  }))}
                  renderItem={(item, isHighlighted) => (
                    <div key={item._id}
                      style={{
                        background: isHighlighted ? 'lightgray' : 'white',
                        cursor: 'pointer',
                        padding: 16,
                      }} >
                      {item.label}
                    </div>
                  )}
                  inputProps={{
                    placeholder: 'Zoek op vluchtnummer',
                    className: 'form-control',
                    id: 'destination'
                  }}
                  value={this.state.searchLocation}
                  onChange={this._searchLocation}
                  onSelect={this._selectLocation}
                />
                </div>
              </form>
            </div>
          </div>
        </header>

        <table style={{ width: '100%' }} className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Vertrek</th>
              <th scope="col">Aankomst</th>
              <th scope="col">Bestemming</th>
              <th scope="col">Vlucht</th>
              <th scope="col">Maatschappij</th>
            </tr>
          </thead>
          <tbody className="table-striped">
            {this.state.items.data.map(item => (
              <tr key={item._id}>
                <td>
                  {this._convertTimeStamp(item.departure_date)}
                </td>
                <td>
                  {this._convertTimeStamp(item.arrival_date)}
                </td>
                <td>
                  {this._findAirport(item.airport_arrival_id).name }
                </td>
                <td>{item.slot_service_id}</td>
                <td>{this._findAircraft(item.airport_aircraft_id).company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
