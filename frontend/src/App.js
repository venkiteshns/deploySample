import React, { useState } from 'react'
import Axios from 'axios';

const App = () => {
  const [data,setData] = useState();

  const getData = async () =>{
    const response = await Axios.get("/getData")
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Fetch</button>
      <h1>{data}</h1>
    </div>
  )
}

export default App
