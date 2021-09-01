import React, { Component } from 'react'

class ContactCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            address: "",
            profilePic: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleFormSubmit(e) {
        e.preventDefault();
    }
    
    render() { 
        return ( 
        <form onSubmit={this.handleFormSubmit}>
            <div>
                <img src={this.state.profilePic} alt="Profile preview" />
            </div>
            <div>
                <div>
                    <input 
                    type="text" 
                    placeholder="FirstName" 
                    name="firstName" 
                    value={this.state.firstName}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="LastName" 
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input 
                    type="tel" 
                    placeholder="PhoneNumber" 
                    name="phoneNumber" 
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Address" 
                    name="address" 
                    value={this.state.address}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Profile Picture Url" 
                    name="profilePic" 
                    value={this.state.profilePic}
                    onChange=""/>
                </div>
               
                <div>
                    <button type="submit">Add Contact</button>
                </div>
            </div>

        </form> );
    }
}
 
export default ContactCreateForm;
