import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props{
  name:string,
  age:Number,
}
const App = (props:Props)=> {
 const {name , age} = props;
 
  return (
 <>
{name}:{age}
 </>
  );
}

export default App;
