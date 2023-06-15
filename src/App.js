
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

// settimeout and usestate 
// import React, { useState } from 'react'

// function App() {
//   const [counter,setcounter]=useState(0)
// setTimeout(()=> 
//   setcounter(counter+1),1000
// );
// console.log('hello',counter)
//   return (
//     <div>{counter}
//     </div>
//   )
// // }

//usestate method

// import React, { useState } from 'react'
// //function DIsplay(props)
// const Display=(props)=>{
//   return(
// <div>{props.counter}</div>
//   )
//   }
//   function Button(props){
//     return(
//       <button onClick={props.handleclick}>{props.text}</button>
//     )
//   }

// function App() {
//   const[counter,setcounter]=useState(0)
//   const Handleplusclick=()=>{
// setcounter(counter+1)
//   }
//   const Handleminusclick=()=>{
//     setcounter(counter-1)
//   }

//       const Handlezeroclick=()=>{
//         setcounter(0)
//           }
//   return (
//     <div>
//      <Display counter= {counter}/>

// <Button text='plus' handleclick={Handleplusclick}/>
// <Button text='minus' handleclick={Handleminusclick}/>
// <Button text='zero' handleclick={Handlezeroclick}/>
//     </div>
//   )
//   }
// import React, { useState } from 'react'

// function App() {
//   const [isButtonEnabled,setButtonEnabled]=useState(false)
  
//   const handclick =()=>{
   
//     setButtonEnabled(true)
    
//   }
  
//   return (
//     <div>
//       <input/>
//       <button onClick={handclick}>toggle</button>
//       <button disabled={isButtonEnabled}>button</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// function App() {
//   const[count,setcount]=useState(0)

//   useEffect (()=>{
//     document.title=`count:${count}`;
//   },[count]);

//   const incrementhandler=()=>{
//     setcount(count+1)
//   }

//   return (
//     <div>
//       <h1>document title update</h1>
//       <button onClick={incrementhandler}>increment</button>
//       </div>
//   )
// }

// export default App

//props drilling

import React from 'react'

function Child({parentdata}){
  
  return(
  <div>
    <h2>childu</h2>
    <Grandfather parentdata={parentdata}/>
  </div>
 
  ) 
}
function Grandfather({parentdata}){
  
  return(
  <div>
    <h2>child</h2>
    
  </div>
 
  )
}





function App() {

  return (
    <div>
      <h1>parent coment</h1>
<Child parentdata={'hello'} />
    </div>
  )
}

export default App