import React, {useState} from 'react';
import './App.css';
import { LocationSearch } from './LocationSearch';


function App() {
  const [locations, setLocations] = useState<string[]>([]);;
  const addLocation = (location: string) => setLocations([location, ...locations]);
  return (
    <div className="container">
      <h1 className="title"> Raining Or Not</h1>
      <LocationSearch onSearch={addLocation} />
      <div className="location-container">
        <h2>Locations</h2>
        <div className="location-table">
          <table>
            <thead>
            <tr>
              <th>City</th>
            </tr>
            </thead>
            <tbody>
            {locations.map(location =><tr><td>{location}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
