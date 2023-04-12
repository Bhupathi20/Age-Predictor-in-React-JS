import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

function App() {

  const [name, setName] = useState("")
  const [PredictedAge, setPredictedAge] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
  .then((res) => {
    setPredictedAge(res.data);
  });
  }

  return (
    <div className='App'>
      <input placeholder='Enter Name'
      onChange={(event) => {
        setName(event.target.value)
      }} /> <br />
      <button onClick={fetchData}>Predict Age</button>
      <h1> Name: {PredictedAge?.name}</h1>
      <h1> Predicted Age: {PredictedAge?.age}</h1>
      <h1> Count: {PredictedAge?.count}</h1>
    </div>
  )

}


export default App
