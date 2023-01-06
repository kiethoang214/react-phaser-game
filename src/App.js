import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import GameScene from './GameScene'
import PreloadScene from './PreloadScene'

class App extends Component {

  state = {
    initialize: true,
    game: {
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
      },
      scene: [PreloadScene, GameScene],
    }
  }

  render() {
    const { initialize, game } = this.state
    return (
      <>
        <h1>hello</h1>
        <IonPhaser game={game} initialize={initialize} />
      </>
    )
  }
}

export default App;