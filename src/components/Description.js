import React, { Component } from 'react'
import { Link , Navigate} from 'react-router-dom'
import { createBrowserHistory } from "history";
export default class Description extends Component {
 

 
  constructor(props) {
    super(props)
  
    this.state = {
       Description : "",
     
     
    
    }
    this.handleusernameA=this.handleusernameA.bind(this)
   


    this.history = createBrowserHistory();
  }
  handleusernameA(e){
    this.setState({
      Description:e.target.value,
    })
    console.log(this.state.Description)
  }
  





 

  resetform = () => {
    this.setState({

        Description : "",
       
      
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
      const { Description,} = this.state;
      const formData = {
        Description,    }
      this.addUser(formData);
  }
 
  render() {
    return (
      <div className='secondpage'>
    
      {!this.state.register ? <div className='form-container3'>
        <h1 className='heading'>Description Information</h1>
        <form className='registor-form' onSubmit={this.handlesubmit}>


         <label>Description:</label>
          <input type="text-area" placeholder='Describe Here !' value={this.state.Description} onChange={this.handleusernameA} required  className="form-field form-field-signup" />
          <br></br>
          <br></br>
        
          <button>Submit</button>
          <div className='sign-up'>
          </div>
        </form>
        
      </div >:
     <Navigate to="/" />
      }
      </div>
    )
  }
}

