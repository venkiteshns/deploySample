import React, { useState } from 'react'
import Axios from 'axios';
const url = "https://deploysample-tu5q.onrender.com";

const App = () => {
  const [data,setData] = useState();

  const getData = async () =>{
    const response = await Axios.get(`${url}/getData`);
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
