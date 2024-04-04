import './App.css';
import React from 'react';
import AddStudentForm from './components/AddStudentForm'
//import Login from './components/Login';

function App() {
  return (
    //call our components
    <div className="App"> 
    <AddStudentForm/>
    {/* <Login/> */}
    </div>
  );
}

export default App;