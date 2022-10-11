import React, { Component } from 'react'
import swal from 'sweetalert';

export default class Report extends Component {
  eventhandler=()=>{
    // alert("Report Submitted Successfully")
    swal("Thanks!", "Report Submitted Successfully!", "success");
  }
  render() {
    return (
      
      <div className='report' onClick={this.eventhandler()}><h1> Thank You ! Your Report has been submitted Succesfully . </h1>
      
      
      
      </div>
      
    )
  }
}
