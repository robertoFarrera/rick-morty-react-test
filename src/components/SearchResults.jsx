import React, { Component } from 'react'

class SearchResults extends Component {
  render () {
    return (
      <div>
        <h2>Resultados de búsqueda: "{new URLSearchParams(this.props.location.search).get('texto')}"</h2>
      </div>
    )
  }
}

export default SearchResults
