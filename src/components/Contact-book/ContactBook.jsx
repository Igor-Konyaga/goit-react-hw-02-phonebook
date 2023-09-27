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

  onSearch = e => {
    const currentValue = e.target.value;
    this.setState({ filter: currentValue });
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
            onChange={this.onSearch}
            value={this.state.filter}
            type="text"
          />
        </label>

        <h2 className={css.title}>Contacts</h2>
        <ul className={css.list}>
          {this.props.contacts.map(contact => {
            return (
              <li className={css.listItem} key={contact.id}>
                <p className={css.itemName}>{contact.name}:</p>
                <p className={css.itemTel}>{contact.number}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
