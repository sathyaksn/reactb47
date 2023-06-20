// import React, { useEffect, useState } from 'react'

// function App() {
//     const [good,setgood]=useState(0)
//     const[neutral,setneutra]=useState(0)
//     const[all,setall]=useState(0)
//     const[bad,setbad]=useState(0)  
//     const[InitialRender,setInitialRender]=useState(true)
// useEffect(()=>{
// if(InitialRender){
//     setInitialRender(false)
//     return;
// }
// setall(all+1)
// },[good,neutral,bad])







//     const handleclickgood=()=>{
//         setgood(good+1)
//     }
//     const handleclickneutral=()=> {
//         setneutra(neutral +1)
//         }
//     const handleclickbad=()=> {
//         setbad(bad+1)
//        }
    
   
   
// return(
// <div>
//     <h3>feedback</h3>
// <button onClick={handleclickgood}>good</button>
//     <button onClick={handleclickneutral}>neutral</button>
//     <button onClick={handleclickbad}>bad</button>
//     <h4>staticsis</h4>
//     <p>good{good}</p>
//     <p>all{all}</p>
//     <p >bad{bad}</p>
//     <p>neutral{neutral}</p>
//     <p>average{(all)/3}</p>
//     <p>positive{Math.round (good/(all)*100)}%</p>

//     </div>
//   )
// }

// export default App
// without React Router
// import React, { useState } from 'react';
// import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <h2>Notes App</h2>
//     </div>
//   )
// }

// function Note({notes}) {
//   const id = useParams().id;
//   const note = notes.find(n => n.id === Number(id));

//   return (
//     <div>
//       <h1>{note.content}</h1>
//     </div>
//   )
// }

// function Notes({ notes }) {
//   return (
//     <div>
//       <h2>Notes</h2>
//       <ul>
//         {
//           notes.map(note => 
//             <li key={note.id}><Link to={`/notes/${note.id}`}>{ note.content }</Link></li>
//           )
//         }
//       </ul>
//     </div>
//   )
// }

// function Users() {
//   return (
//     <div>
//       <h2>Users App</h2>
//     </div>
//   )
// }

// function App() {

//   const notes = [
//     {
//       id: 1,
//       content: 'Javascript'
//     },
//     {
//       id: 2,
//       content: 'ReactJS'
//     },
//     {
//       id: 3,
//       content: 'NodeJS'
//     }
//   ];

//   const padding = {
//     padding: 10
//   };

//   return (
//     <Router>
//       <div>
//         <Link to='/' style={padding}>home</Link>
//         <Link to='/notes' style={padding}>notes</Link>
//         <Link to='/users' style={padding}>users</Link>
//       </div>

//       <Routes>
//         <Route path='/notes/:id' element={ <Note notes={notes}/> } />
//         <Route path='/users' element={ <Users /> } />
//         <Route path='/notes' element={<Notes notes={notes} /> } />
//         <Route path='/' element={ <Home /> } />
//       </Routes>
//     </Router>
//   )
// }

// export default App;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div>
      <button className='btn btn-dark'>clickhere</button>
    </div>
  )
}

export default App



{/* <Router> 
<div>

<Link to='/' style={padding}>home</Link>
<Link to='/notes' style={padding}>notes</Link>
<Link to='/users' style={padding}>users</Link>
</div>
<Routes>
<Route path='/users'element={<Users/>}/> 
<Route path='/notes' element={<Notes/>}/>
<Route path='/'element={<Home/>}/>
</Routes>
</Router>  */}