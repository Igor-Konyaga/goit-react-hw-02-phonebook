import { Component } from 'react';
import css from './ContactBook.module.css';
import { nanoid } from 'nanoid';

export class ContactBook extends Component {
  state = {
    name: '',
    number: '',
    id: '',
    filter: '',
  };

  handleInput = e => {
    const currentValue = e.target.value;
    const currentName = e.target.name;
    this.setState({ [currentName]: currentValue, id: nanoid() });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h1 className={css.title}>Phonebooks</h1>
        <form action="#" onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              onChange={this.handleInput}
              value={this.state.name}
              name="name"
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              onChange={this.handleInput}
              value={this.state.number}
              name="number"
              required
            />
          </label>

          <button className={css.btn} type="submit">
            add contact
          </button>
        </form>

        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            onChange={this.handleFilter}
            value={this.state.filter}
            name="filter"
            type="text"
          />
        </label>

        <h2 className={css.title}>Contacts</h2>
        <ul className={css.list}>
          {this.props.contacts.map(contact => {
            const contactName = contact.name.toLowerCase();
            const filterName = this.state.filter.toLowerCase().trim();

            if (!this.state.filter) {
              return (
                <li className={css.listItem} key={contact.id}>
                  <p className={css.itemName}>{contact.name}:</p>
                  <p className={css.itemTel}>{contact.number}</p>
                </li>
              );
            } else if (contactName === filterName) {
              return (
                <li className={css.listItem} key={contact.id}>
                  <p className={css.itemName}>{contact.name}:</p>
                  <p className={css.itemTel}>{contact.number}</p>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}


