import React from 'react'
import './SearchSuggestionList.scss'
import SearchSuggestion from '../SearchSuggestion/SearchSuggestion';

const SearchSuggestionList = ({results}) => {
    return (
        <div className="results-list">
          {results.map((result, id) => {
            return <SearchSuggestion result={result.name} key={id} />;
          })}
        </div>
      );
  }
  
  export default SearchSuggestionList