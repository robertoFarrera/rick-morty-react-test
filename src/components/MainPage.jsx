import React, { Component } from 'react'
import LastEpisodes from './Episodes/LastEpisodes'
import RecentCharacters from './Characters/RecentCharacters'

class MainPage extends Component {
  render () {
    return (
      <main>
        <LastEpisodes />
        <hr />
        <RecentCharacters />
      </main>
    )
  }
}

export default MainPage
