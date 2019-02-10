import React from 'react'
import '../App.css'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom'
import Shelf from './Shelf';
import { MessageInput } from '../util/messageUtil';
import ReactLoading from 'react-loading';

class SearchBook extends React.Component {
  state = {
    search: ""
  }

  handleSearch = (event) => {
    const value = event.target.value;
    this.props.searchBooks(value);
    this.setState({
      search: value
    })
  };

  isValidBooks = () => this.props.booksSearch && this.props.booksSearch.length > 0 && this.state.search !== '';

  noResult = () => this.props.booksSearch && this.props.booksSearch.error && this.state.search.length > 0;

  isLoading = () => !this.noResult() && this.state.search !== '' && this.props.isSearch;
  
  isErro = () => this.props.isErro && this.state.search !== '' && !this.isLoading();
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <MessageInput id="searchBytitleOrAuthor" value={this.state.search} onChange={this.handleSearch} placeholder />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.isValidBooks() &&
              <Shelf changeShelf={this.props.changeShelf} currentlyBooks={this.props.booksSearch} />
            }
            {this.noResult() &&
              <FormattedMessage id="noResults" />
            }
            {this.isLoading() &&
              <ReactLoading type={'spinningBubbles'} color={'#008000'} height={100} width={100} />
            }
            {this.isErro() &&
              <div className="error-search">
                <span className="icon-error"></span>
                <FormattedMessage id="erroSearch" />
              </div>
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
