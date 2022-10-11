import React, { Component } from 'react'
import { Link , Navigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
// import Address from './Address';
// import Description from './Description';
export default class Contactform extends Component {
 

  constructor(props) {
    super(props)
  
    this.state = {
      Mailing_street : "",
      Other_street : "",
      Mailing_city:"",
      Other_City : "",
      Mailing_State :"",
      Other_State : "",
      Mailing_Zip:"",
      Other_Zip : "",
      Mailing_Country: "",
      Other_Country : "",
    }
    this.handleusernameA=this.handleusernameA.bind(this)
    this.handleusernameB=this.handleusernameB.bind(this)

    this.handleusernameC=this.handleusernameC.bind(this)
    this.handleusernameD=this.handleusernameD.bind(this)

    this.handleusernameE=this.handleusernameE.bind(this)
    this.handleusernameF=this.handleusernameF.bind(this)
    this.handleusernameG=this.handleusernameG.bind(this)

    this.handleusernameH=this.handleusernameH.bind(this)

    this.handleusernameI=this.handleusernameI.bind(this)

    this.handleusernameJ=this.handleusernameJ.bind(this)







    this.history = createBrowserHistory();
  }
  handleusernameA(e){
    this.setState({
      Mailing_street:e.target.value,
    })
    console.log(this.state.Mailing_street)
  }
  handleusernameB(e){
    this.setState({
 Other_street:e.target.value
    })
    console.log(this.state.Other_street)
  }
  handleusernameC(e){
    this.setState({
  Mailing_city:e.target.value
    })
    console.log(this.state.Mailing_city)
  }


  handleusernameD(e){
    this.setState({
 Other_City:e.target.value
    })
    console.log(this.Other_City)
  }

handleusernameE(e){
    this.setState({
     Mailing_State:e.target.value
    })
    console.log(this.state.Mailing_State)
  }
  handleusernameF(e){
    this.setState({
     Other_State:e.target.value
    })
    console.log(this.state.Other_State)
  }
  handleusernameG(e){
    this.setState({
     Mailing_Zip:e.target.value
    })
    console.log(this.state.Mailing_Zip)
  }
  handleusernameH(e){
    this.setState({
    Other_Zip:e.target.value
    })
    console.log(this.state.Other_Zip)
  }
  handleusernameI(e){
    this.setState({
     Mailing_Country:e.target.value
    })
    console.log(this.state.Mailing_Country)
  }
  handleusernameJ(e){
    this.setState({
    Other_Country:e.target.value
    })
    console.log(this.state.Other_Country)
  }


 

  resetform = () => {
    this.setState({

      Mailing_street : "",
      Other_street : "",
      Mailing_city:"",
      Other_City : "",
      Mailing_State :"",
      Other_State : "",
      Mailing_Zip:"",
      Other_Zip : "",
      Mailing_Country: "",
      Other_Country : "",

      
    });
  }
// calling api using fetch method of javascript
  addUser = async (formData) => {
    await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    }).then(()=> {
      this.resetform()
      this.setState({
        register : "Registered Successfully"
      })
      alert("Registered successfully.")
    }).catch((e) => {
      alert("something went wrong.")
    })
  }
  handlesubmit = (e) => {
      e.preventDefault();
      const { Mailing_street,Other_street, Mailing_city, Other_City,  Mailing_State,Other_State,  Mailing_Zip, Other_Zip, Mailing_Country,Other_Country } = this.state;
      const formData = {
        Mailing_street,Other_street, Mailing_city, Other_City,  Mailing_State,Other_State,  Mailing_Zip, Other_Zip, Mailing_Country,Other_Country     }
      this.addUser(formData);
  }
 
  render() {
    return (
      <div className='secondpage'>
        {/* <Address/> */}
        {/* <Description/> */}
      {!this.state.register ? <div className='form-container2'>
        <h1 className='heading'>Address Information</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>


         <label>Mailing Street:</label>
          <input type="text" placeholder='Enter Mailing street' value={this.state.Mailing_street} onChange={this.handleusernameA} required  className="form-field1" />

{/*           
         <label>Other Street:</label>
          <input type="text" placeholder='Enter Other street' value={this.state.Mailing_street} onChange={this.handleusernameA} required  className="form-field1" /> */}
   

          <label>Other  Street:</label>
          <input type="text" placeholder='Enter Your Other Street' value={this.state.Other_street} onChange={this.handleusernameB}  required className="form-field2"  />



          <label>Mailing City:</label>
          <input type="text" placeholder='Enter Your Mailing  City' value={this.state.Mailing_city} onChange={this.handleusernameC}  required className="form-field2"  />
   


          <label>Other City:</label>
          <input type="text" placeholder='Enter Your  Other City' value={this.state.Other_City} onChange={this.handleusernameD} required className="form-field3"  />


          <label>Mailing State:</label>
          <input type="text" placeholder='Enter Your Mailing State' value={this.state.Mailing_State} onChange={this.handleusernameE}  required className="form-field1"  />

          <label>Other State:</label>
          <input type="text" placeholder='Enter Your Other State' value={this.state.Other_State} onChange={this.handleusernameF}  required className="form-field2"  />
         
         

          <label> Mailing Zip:</label>
          <input type="number" placeholder='Enter  Mailing Zip' value={this.state.Mailing_Zip} onChange={this.handleusernameG}  required className="form-field4"  />

          <label>Other  Zip:</label>
          <input type="number" placeholder='Enter Your Other Zip' value={this.state.Other_Zip} onChange={this.handleusernameH}  required className="form-field1"  />

          <label> Mailing Country:</label>
          <input type="text" placeholder='Enter  Mailing Country'value={this.state.Mailing_Country} onChange={this.handleusernameI}  required className="form-field2"  />
           
           
          <label>Other Country:</label>
          <input type="text" placeholder='Enter Other Country'value={this.state.Other_Country} onChange={this.handleusernameJ}  required className="form-field1"  />






          


          <br></br>
          <br></br>
        

        </form>
        
      </div >:
     <Navigate to="/" />
      }
      </div>
    )
  }
}
