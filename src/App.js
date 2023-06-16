// import React from 'react'

// function App() {
//     const title='half stack application development'
//     const name1='fundamental of react'
//     const number1=10
//     const name2="using props to pass data"
//     const number2=7
//     const name3="state of acomponent"
//     const number3=14
//     const name4="number of exercise"
//   return (
//     <div>
// <h3>{title}</h3>
// <p>{name1}{number1}</p>
// <p>{name2}{number2}</p>
// <p>{name3}{number3}</p>
// <p>{name4}{number1+number2+number3}</p>
//     </div>
//   )
// }

import React, { useState } from 'react'

function App() {
    const [good,setgood]=useState(0)
    const[neutral,setneutra]=useState(0)
    const[bad,setbad]=useState(0)  
    const handleclickgood=()=>setgood(good+1)
    const handleclickneutral=()=> setneutra(neutral +1)
    const handleclickbad=()=> setbad(bad+1)
    
   
   
return(
<div>
    <h3>feedback</h3>
<button onClick={handleclickgood}>good</button>
    <button onClick={handleclickneutral}>neutral</button>
    <button onClick={handleclickbad}>bad</button>
    <h4>staticsis</h4>
    <p>good{good}</p>
    <p >bad{bad}</p>
    <p>neutral{neutral}</p>
    <p>all:{good+neutral+bad}</p>
    <p>average{(good+neutral+bad)/3}</p>
    <p>positive{good/(good+neutral+bad)*100}%</p>

    </div>
  )
}

export default App