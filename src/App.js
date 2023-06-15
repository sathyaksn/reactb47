
// //function name always starts with uppercase letter
// function App(){
//   //Java script codes

// import { Component } from "react";

 


//   //Web page contents inside 
//   return (
//     // sholud have only one parent element
//     <div className="App">
   
//     </div>
//   );
// }

// //class component
// class App extends Component{
//   render(){
//     return(
//       // Only one parent
//       <div>Hello</div>
      
//     )
//   }
// }

// CLASS COMPONENT using external folder

// import React, { Component } from 'react'
// import Hello  from "./components/hello"
// export  class 
// App extends Component {
//   render() {
//     return (
//       <div>
//       <Hello name={'sathya'}/>
//       </div>
//     )
//   }
// }

// function component using external folder
import React from 'react'
import Hello from "./components/hello"
function App() {
  return (
    <div><Hello name={"sathya"} /></div>
  )
}

export default App

