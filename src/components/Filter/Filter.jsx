import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handleFilter = e => {
    this.props.filter(e.target.value);
  };

  render() {
    return (
      <label className={css.label}>
        Find contacts by name
        <input className={css.input} onChange={this.handleFilter} type="text" />
      </label>
    );
  }
}
