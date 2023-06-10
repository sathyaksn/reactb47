

// function App () {
//java script
// console.log('hello component')
// const now =new Date();
// const a =10;
// const b =20;
// console.log(now,a+b);


//   return (
//   <div>
//     <p>hello world, it is {now.toString()}
//     {a} plus{b} is{a+b}
//     </p>
   
//   </div>
//   );
// }

// export default App;
 
import React from 'react'

function Hello(props){
return(
  <div>
<p>Hello {props.name} you are {props.age} years old!</p>
</div>
)
}  


function App() {
  const age=10;
  return (
    <div>
      <h1>Greatings</h1>
      <Hello name='sathya' age={10+20}/>
      <Hello name="narayanan" age={age}/>
     
    </div>
  )
}

export default App





