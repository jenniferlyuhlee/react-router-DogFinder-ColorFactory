import React, {useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';

/**
 * App
 * state: dogs: [{name, age, src, facts}], loading: true
 */
function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp = await fetch('/db.json')
        const json = await resp.json();
        setDogs(json.dogs)
      }
      // try{
      //   const resp = await fetch('http://localhost:5001/dogs')
      //   const json = await resp.json();
      //   setDogs(json)
      // }
      catch(err){
        return <h3>Error loading dogs...</h3>
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  // awaiting for data retrieval before rendering page
  if (loading){
    return <h3>Loading dogs...</h3>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs = {dogs}/>
        <RouteList dogs = {dogs}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
