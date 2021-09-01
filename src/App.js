import React from 'react';
import ContactDetailsPage from './components/contact-details';
import ContactsPage from './components/contacts';
import ContactCreatePage from './components/contact-create/ContactCreatePage';
import { getContacts } from './utils/contacts';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';





const dumContacts = [
  {
    "id": 1,
    "firstName": "Culley",
    "lastName": "Snelman",
    "profilePic": "https://i.pravatar.cc/300?u=1",
    "phoneNumber": "351-346-6140",
    "email": "csnelman0@blog.com",
    "address": "09 Eggendart Parkway"

},
{
  "id": 2,
  "firstName": "Tammara",
  "lastName": "Allcorn",
  "profilePic": "https://i.pravatar.cc/300?u=2",
  "phoneNumber": "676-783-9239",
  "email": "tallcorn1@senate.gov",
  "address": "78145 Brentwood Court"
},
{
  "id": 3,
  "firstName": "Cassandry",
  "lastName": "Roze",
  "profilePic": "https://i.pravatar.cc/300?u=3",
  "phoneNumber": "223-879-6692",
  "email": "croze2@w3.org",
  "address": "2079 Morrow Parkway"
},
{
  "id": 4,
  "firstName": "Koressa",
  "lastName": "Galey",
  "profilePic": "https://i.pravatar.cc/300?u=4",
  "phoneNumber": "761-858-5580",
  "email": "Kgaley3@econmist.com",
  "address": "5 Hanover Alley"
}


];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    const storedContacts = getContacts();
    this.setState({contacts: storedContacts.length ? storedContacts : dumContacts
    })
  }
  render() { 
    return ( 
      <div>
        <LoginPage />
        <RegisterPage />
        <ContactsPage contacts={this.state.contacts} />
        <ContactDetailsPage contact={this.state.contacts[0]} />
        <ContactCreatePage />
      </div>
     );
  }
}
 
export default App;
