import React, {useState} from 'react';
import './App.css';
import {Form} from './Components/Form'

function App() {
  let [data,setData] = useState([])
  let apiArray = async () => {
    let res = await fetch(`https://dummyjson.com/products?pages=1&limit=16`);
    let req = await res.json();
    // setData(req.products)
    console.log(req.products)
  }
  apiArray()
  return (
    <>
      <Form />
    </>
  );
}

export default App;
