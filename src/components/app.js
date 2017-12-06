import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'
import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div>Hello there
        <SearchBar />
      </div>

    );
  }
}
