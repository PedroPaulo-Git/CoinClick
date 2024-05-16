import React, { useState } from 'react';
import Coin from '../../assets/imgs/icons/coinicon.png'
import './game.css'

const Game = () => {
  const [coinCliked, setCoinCliked] = useState(false)
  const [coins,setCoins] = useState(0)

  const HandleCoinClicked =()=>{

  }
  return (
    <div>
      <header>
        {coinCliked}
      </header>
      <footer className='footer_game_coin'>
        <div className='footer_game_coin_container'>
          <div>
            <img onClick={HandleCoinClicked} className='coin' src={Coin} alt="" />
          </div>
        </div>
      </footer>

    </div>
  )
}
export default Game