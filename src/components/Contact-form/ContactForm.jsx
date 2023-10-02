import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const currentValue = e.target.value;
    const currentName = e.target.name;
    this.setState({ [currentName]: currentValue });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state, id: nanoid() });

    this.reset();
  };

  render() {
    return (
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
    );
  }
}
