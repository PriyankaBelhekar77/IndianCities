import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchData(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className='App'>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            text='text'
            name='text'
            placeholder='Search'
            value={this.state.text}
            autoComplete='off'
            onChange={this.onChange}
            className={'search-input'}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    )
  }
}

export default Search;
