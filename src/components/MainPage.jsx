import React, { Component } from 'react'
import LastsEpisodes from './Episodes/LastsEpisodes'
import RecentCharacters from './Characters/RecentCharacters'

class MainPage extends Component {
  render () {
    return (
      <main>
        <RecentCharacters />
        <LastsEpisodes />
      </main>
    )
  }
}

export default MainPage
