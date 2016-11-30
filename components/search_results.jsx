import React from 'react'
import {Link} from 'react-router'

const noCharsFound = (<li>We couldn’t find any characters.</li>)

const characterResultList = (characters, clearInput) => {
  if (characters.length > 0) {
    return (
      <ul className='search-list'>
        {characters.map( (char) => {
          return <li key={char.id} className='search-item'>
            <img src={char.thumbnail.path + '/portrait_small.' + char.thumbnail.extension} className="search-img"/>
            <Link onClick={clearInput} to={`characters/${char.id}`}>{char.name}</Link>
          </li>
        })
      }
      </ul>)
    } else {
      return (
      <ul>
        {noCharsFound}
      </ul>
    )
  }
}

const searchResultContainer = (characters, hidden, clearInput) => {
  return (
    <div className={`search-results ${hidden}`}>
      {characterResultList(characters, clearInput)}
    </div>
  );
}

const SearchResults = ({characters, hidden, clearInput}) => {
    return searchResultContainer(characters, hidden, clearInput)
}

export default SearchResults;
