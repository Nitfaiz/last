import React, { Component } from 'react'

export default class Logut extends Component {
  // handlechange=()=>{
  //   alert("Logout Successfully !")
  // }
  change=()=>{
    alert("get out")
  }
  render() {
    return (
      <div onClick={this.change} className='logout'>Logut successfully !</div>

      // <div className='logout' onClick={this.handlechange()}>Logut successfully !</div>
    )
  }
}
