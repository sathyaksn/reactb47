
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
// import React, { Component } from 'react'
// import Hello  from "./components/hello"
// export default class 
// App extends Component {
//   render() {
//     return (
//       <div>
//       <Hello/>
//       </div>
//     )
//   }
// }

//  

import React from 'react'
import Hello from './components/hello'
function App() {
  return (
    <div>
      <Hello/>
    </div>
  )
}

export default App