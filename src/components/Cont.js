import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { createBrowserHistory } from "history";

export default class Cont extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Contact_Owner: "",
            First_Name: "",
            Account_Name: "",
            Email: "",
            Phone: "",
            Other_Phone: "",
            Mobile: "",
            Assistant: "",
            Lead_Source: "",
            Mailing_State: "",
            Vendor_Name: "",
            Title: "",
            Department: "",
            Home_Phone: "",
            Fax: "",
            Date_of_Birth: "",
            Asst_Phone: "",
            Email_opt_out: "",
            Skype_ID: "",
            Secondary_Email: "",
            Twitter: "",
            Reporting_to: "",
            Last_Name_Name: "",

        }
        this.handlchange = this.handlechange.bind(this)

        this.history = createBrowserHistory();
    }
    handlechange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        // console.log(this.state.Contact_Owner)
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
    //   this.resetform()
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
      const {Contact_Owner,First_Name,Account_Name, Email, Phone,Other_Phone,Mobile,Assistant ,Lead_Source,Last_Name,Vendor_Name, Title  ,Department,Home_Phone,Fax,Date_of_Birth,Asst_Phone,Email_opt_out,Skype_ID,Secondary_Email,Twitter,Reporting_to} = this.state;
      const formData = {
        Contact_Owner,First_Name,Account_Name, Email, Phone,Other_Phone,Mobile,Assistant,Lead_Source,Last_Name,Vendor_Name, Title  ,Department,Home_Phone,Fax,Date_of_Birth,Asst_Phone,Email_opt_out,Skype_ID,Secondary_Email,Twitter,Reporting_to
      }
      this.addUser(formData);
  }


    render() {
        return (
            <div style={{display: "flex"}}>
                <div>
                    <div>
                        <label>Contact Owner:</label>
                        <input type="text" placeholder='Enter Owner Name' name="Contact_Owner" value={this.state.Contact_Owner} onChange={this.handlechange} required className="form-field1" />
                    </div>



                    <div>
                        <label>Lead Source:</label>
                        <input type="text" placeholder='Enter Lead' name="Lead_Source" value={this.state.Lead_Source} onChange={this.handlechange} required className="form-field2" />
                    </div>



                    <div>
                        <label> First Name:</label>
                        <input type="text" placeholder='Enter First Name' name="First_Name" value={this.state.First_Name} onChange={this.handlechange} required className="form-field3" />
                    </div>




                    <div>
                        <label> Last Name:</label>
                        <input type="text" placeholder='Enter  Last Name' name="Last_Name" value={this.state.Last_Name} onChange={this.handlechange} required className="form-field4" />
                    </div>




                    <div>
                        <label>Account Name:</label>
                        <input type="email" placeholder='Enter Your Account Name' name="Account_Name" value={this.state.Account_Name} onChange={this.handlechange} required className="form-field5" />
                    </div>



                    <div>
                        <label> Vendor Name:</label>
                        <input type="text" placeholder=' Vendor Name' name='Vendor_Name' value={this.state.Vendor_Name} onChange={this.handlechange} required className="form-field6" />
                    </div>



                    <div>
                        <label>Email:</label>
                        <input type="email" placeholder=' Enter Your  Email' name='Email' value={this.state.Email} onChange={this.handlechange} required className="form-field7" />
                    </div>
                </div>

                <div>
                    <div>
                        <label> Title:</label>
                        <input type="text" placeholder=' Title' name='Title' value={this.state.Title} onChange={this.handlechange} required className="form-field1" />
                    </div>




                    <div>
                        <label> Phone Number:</label>
                        <input type="number" placeholder='Enter Your Phone no' name='phone' value={this.state.Phone} onChange={this.handlechange} required className="form-field9" />
                    </div>



                    <div>
                        <label> Department:</label>
                        <input type="text" placeholder=' Department' name='Department' value={this.state.Department} onChange={this.handlechange} required className="form-field10" />
                    </div>



                    <div>
                        <label> Other Phone:</label>
                        <input type="number" placeholder='Enter  Other Phone No ' name='Other_phone' value={this.state.Other_Phone} onChange={this.handlechange} required className="form-field11" />
                    </div>



                    <div>
                        <label>Home Phone:</label>
                        <input type="number" placeholder='Enter Mobile No ' name='Home_phone' value={this.state.Mobile} onChange={this.handlechange} required className="form-field12" />
                    </div>

                    <div>
                    <label>Mobile:</label>
                   <input type="number" placeholder=' Home Phone'name='Mobile' value={this.state.Mobile} onChange={this.handlechange}  required className="form-field7"  />
                    </div>

                    <div>
                    <label> Fax:</label>
                    <input type="text" placeholder='Fax 'name='Fax' value={this.state.Fax} onChange={this.handlechange}  required className="form-field8"  />
                    </div>

                    <div>
                    <label>Assistant:</label>
                   <input type="text" placeholder='Assistent details 'name='Assistant' value={this.state.Assistant} onChange={this.handlechange}  required className="form-field16"  />
                    </div>

                    <div>
                        

                 <label>Date of Birth:</label>
                <input type="text" placeholder='Enter DOB'name='Date_of_Birth' value={this.state.Date_of_Birth} onChange={this.handlechange}  required className="form-field7"  />
                    </div>
                <div>
                     <label>Asst Phone:</label>
          <input type="number" placeholder=' Assistent No 'name='Asst_phone' value={this.state.Asst_Phone} onChange={this.handlechange}  required className="form-field13"  />
                </div>

                </div>

            </div>
        )
    }
}
