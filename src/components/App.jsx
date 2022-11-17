import { Component } from 'react';
import Container from './Container';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList/ContactList';

import { nanoid } from 'nanoid';
import Filter from './Filter';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(newContact);
    if (this.state.contacts.find(item => item.name.toLowerCase() === newContact.name.toLowerCase())) {
      console.log("Такое имя уже есть")
    }else
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],

    }));
  };

  filterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };



  handleVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    return (
      this.state.contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter))
    );
  };

  deleteContact = (contactID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactID
      )
    }))
  };

  render() {
    return (
      <>

        <Container title={'Phonebook'}>
          <ContactForm addContact={this.addContact}/>
          <h2>Contacts</h2>
          <Filter
            onChange={this.filterChange}
            value={this.state.filter}
          />
          <ContactList
            contacts={this.handleVisibleContacts()}
            filter={this.state.filter}
            onClick={this.deleteContact}
           />
        </Container>
      </>
    );
  }

}



