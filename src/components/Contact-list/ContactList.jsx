import { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.filteredContacts().map(contact => {
          return (
            <li className={css.listItem} key={contact.id}>
              <p className={css.itemName}>{contact.name}:</p>
              <p className={css.itemTel}>{contact.number}</p>
              <button
                className={css.button}
                onClick={() => this.props.deleteContact(contact.name)}
                type="button"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
