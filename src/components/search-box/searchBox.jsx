import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { className, placeholder, name, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        name={name}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
