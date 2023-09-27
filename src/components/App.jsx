import { Component } from 'react';
import { ContactBook } from './Contact-book/ContactBook';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  formSubmit = data => {
    this.state.contacts.push(data);
    console.log(data);
  };

  render() {
    return (
      <div className={css.section}>
        <ContactBook
          contacts={this.state.contacts}
          onSubmit={this.formSubmit}
        />
      </div>
    );
  }
}
