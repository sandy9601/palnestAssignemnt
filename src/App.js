import React from'react';
import ReactDOM from'react-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [set,setdata]=useState(0)
  const onclickHandler=()=>{

  }

  return (
   <center>
    Hello world
    <form>
    <input type="text" placeholder='productName'/>
    <input type="submit" value='submit'/>
    </form>
   </center>
  );
}

export default App;
