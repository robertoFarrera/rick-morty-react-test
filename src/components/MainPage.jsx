import React, { Component } from 'react'
import LastEpisodes from './Episodes/LastEpisodes'
import RecentCharacters from './Characters/RecentCharacters'

class MainPage extends Component {
  render () {
    return (
      <main>
        <RecentCharacters />
        <LastEpisodes />
      </main>
    )
  }
}

export default MainPage
