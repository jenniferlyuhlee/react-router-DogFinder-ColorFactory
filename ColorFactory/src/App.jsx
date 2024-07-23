import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList'
import useLocalStorageState from './hooks/useLocalStorageState';
import './App.css'

function App() {
  const [colors, setColors] = useLocalStorageState('colors', [])

  const handleFormSubmit = (newColor) => {
    setColors(colors => [...colors, newColor])
  }

  return (
    <div>
      <BrowserRouter>
        <RoutesList colors = {colors} 
                    handleFormSubmit = {handleFormSubmit}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
