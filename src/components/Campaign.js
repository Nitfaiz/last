import React, { Component } from 'react'
import swal from 'sweetalert'

export default class Campaign extends Component {
  render() {
    return (
      swal({
        title: "Thank you",
        text: "Campaign will start soon!",
        icon: "success",
      }), 
      <div><h1 className='imagecam'>Google Ads</h1>

     
      </div>
    )
  }
}
