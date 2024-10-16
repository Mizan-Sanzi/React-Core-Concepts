import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  
  return (
    <>
      <h1>Vite + React</h1>
      <Todo></Todo>
      {/* <Device serial='One' name='Laptop' price='30000 BDT.'></Device>
      <Device serial='Two' name='Samsung' price='40000 BDT.'></Device>
      <Device serial='Three' name='Camera' price='50000 BDT.'></Device>
      <Person></Person>
      <Student name ='Adu vai' grade='7' score='99'></Student>
      <Student name='Dadu vai' grade='7' score='99'></Student>
      <Developer></Developer> */}
      
    </>
  )
}

function Device (props){
  // console.log(props);
  return (
    <div style = {
      {
        border: '2px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
      }
    }>

      <h3>This is Device {props.serial}. The device name is {props.name}. Price: {props.price}</h3>
    </div>
  )
}

function Person() {
  const age = 35;
  return <h1>I am a person with age {age}.</h1>
}

const {grade, score} = {grade: '7', score: '99'};
function Student({grade, score}){

  return (
    <div className='student'>
      <h3>I am a bura student.</h3>
      <p>My Name is:</p>
      <p>Amar kono personal jadu nai.</p>
      <p>I read in class: {grade}.</p>
      <p>My average exam score is: {score}.</p>
    </div>
  )
}
function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid orange',
    borderRadius: '10px'
  }
  return (
    <div style = {{
      margin: '20px',
      padding: '20px',
      border: '2px solid red',
      borderRadius: '10px'
    }}>
      <h5>I will try my best to become a developer.</h5>
      <p>To become a developer I need to code a lot.</p>
    </div>
  )
}
export default App