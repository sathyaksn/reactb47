// import React, { Component } from 'react'

// export class Hello extends Component {
//   render() {
//     return (
//       <div>hello,{this.props.name}</div>
//     )
//   }
// }
// export default Hello;

import React from 'react'

function hello(props) {
  return (
    <div>{props.name}</div>
  )
}

export default hello