import React from 'react';

class RegisterForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    
}
handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
}
handleFormSubmit(e) {
    e.preventDefault();

}
    render() { 
        return ( 
            <form onSubmit={this.handleFormSubmit}>
            <div>
                <label htmlFor="usename">Username</label>
                <input
                id="usename"
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChange} 

                />
            </div>
            <div>
                <lable htmlFor="password">Password</lable>
                <input 
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.pasword}
                onChange={this.handleInputChange}
                
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>

        </form>
         );
    }
}
 
export default RegisterForm;