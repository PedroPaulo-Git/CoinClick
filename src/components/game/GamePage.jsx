import React, { useState } from 'react';
import Coin from '../../assets/imgs/icons/coinicon.png'
import CharMonster from '../../assets/imgs/npcskins/monster.png';
import MyChar from '../../assets/imgs/npcskins/char1.png'
import './game.css'

const Game = () => {
  const [coinCliked, setCoinCliked] = useState(false)
  const [coinClikedScale, setCoinClikedScale] = useState(false)
  const [coins, setCoins] = useState(0)

  const HandleCoinClicked = () => {
    setCoinCliked(true)
    if (coinCliked === true) {
      setCoinClikedScale(true)
      setTimeout(() => {
        setCoinClikedScale(false)
      }, 100);
    }
    setCoins(coins + 1)
  }
  return (
    <div>
      <header className='header_game_coin'>
        <div className='header_game_coin_container'>
          <div className='header_game_coin_point'>
            <span className='coins_point'>{coins}</span>
          </div>
        </div>
      </header>
      <main className='main_game_window_container'>
        <div className='game_window'>
          <div className='game_window_bottom'>
          <img className='game_char game_char_mychar' src={MyChar} alt="" />
          <img className='game_char game_char_monster' src={CharMonster} alt="" />
          </div>
         
        </div>
      </main>
      <footer className='footer_game_coin'>
        <div className='footer_game_coin_container'>
          <div>
            <img onClick={HandleCoinClicked} className={coinClikedScale ? 'coinCliked' : 'coin'} src={Coin} alt="" />
          </div>
        </div>
      </footer>

    </div>
  )
}
export default Game