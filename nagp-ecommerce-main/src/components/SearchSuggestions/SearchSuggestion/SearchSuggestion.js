import React from 'react'
import './SearchSuggestion.scss'

const SearchSuggestion = ({result}) => {
    return (
        <div
          className="search-suggestion"
          onClick={(e) => alert(`You selected ${result}!`)}
        >
          {result}
        </div>
    )
  }
  
  export default SearchSuggestion