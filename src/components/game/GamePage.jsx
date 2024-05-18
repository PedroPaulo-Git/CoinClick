import React, { useEffect, useState } from 'react';
import Coin from '../../assets/imgs/icons/coinicon.png';
import StartButton from '../../assets/imgs/icons/startButton.png'
import CharMonster from '../../assets/imgs/npcskins/monster.png';
import MyCharImg from '../../assets/imgs/npcskins/char1.png';


import EnemyDefeat from '../../assets/imgs/icons/enemydefeat.png';



import Arena from '../../assets/imgs/arena.jpeg';
import './game.css'

import { myCharCurrent, enemies } from '../../models/characters'
import { battle } from '../../models/battle.mjs'

const Game = () => {

  const [coinCliked, setCoinCliked] = useState(false)
  const [changeScale, setChangeScale] = useState(false)
  const [coins, setCoins] = useState(0)

  const [changeScaleStartButton, setChangeScaleStartButton] = useState(false)


  //Enemies
  const [enemiesStatus, setEnemiesStatus] = useState('')
  const [witchStatus, setWitchStatus] = useState('')

  //Characters Current
  const [charCurrent, setCharCurrent] = useState('')


  //Characters Current function Show
  const myCharWizard = myCharCurrent.charWizard
  const showMycharWizardStatus = () => {

  }

  //Witch
  const witch = enemies.witch
  useEffect(() => {
    const showWitchStatus = () => {
      if (witch) {
        const totalStatus = [witch.atk, witch.hpmax];
        setWitchStatus(totalStatus);
      } else {
        console.log("Witch not found in enemies array.");
      }
    };


    const showEnemyStatus = () => {
      setEnemiesStatus(enemies);
      showWitchStatus();
    };

    showEnemyStatus();
    showWitchStatus();

  }, []);


  //battle log
  const [battleStatus, setBattleStatus] = useState(witch.hpmax);
  const [witchHpCurrent, setWitchHpCurrent] = useState(witch.hpmax);
  const [witchLevelCurrent, setWitchLevelCurrent] = useState(witch.level);
  const myCharAttack = myCharWizard.atk;
  const enemyWitchHp = witch.hpmax;

  const handleStartBattle = async () => {
    await battle(enemyWitchHp, myCharAttack, setWitchHpCurrent,setWitchLevelCurrent);
    console.log(battleStatus)
    console.log(witchLevelCurrent)
  };


  // const showWitchStatus = () => {
  //   if (witch) {
  //     const totalStatus = [witch.atk, witch.hpmax];
  //     setWitchStatus(totalStatus);
  //   } else {
  //     console.log("Witch not found in enemies array.");
  //   }
  // }
  // const showEnemyStatus = () => {
  //   setEnemiesStatus(enemies)
  //   showWitchStatus()
  // }

  // useEffect(() => {
  //   showEnemyStatus()
  //   showWitchStatus()
  //   handleStartBattle()
  // }, [])


  const HandleCoinClicked = () => {
    setCoinCliked(true)
    if (coinCliked === true) {
      setChangeScale(true)
      setTimeout(() => {
        setChangeScale(false)
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

        <div className='view_status_container view_status_container_mychar '>
          <p>Level: {myCharWizard.level}</p>
          <p>Life: {myCharWizard.hpmax}</p>
          <p>Attack: {myCharWizard.atk}</p>
          <p>Power: {myCharWizard.power}</p>
        </div>

        <div>
          <div className='game_status_container'> 
            {witchHpCurrent <= 0 ? <img className='game_window game_image_enemydefeat' src={EnemyDefeat}/> :''}
         </div>
        <div className='game_window'>
            <img className='game_window' src={Arena} alt="" />
            <div className='game_window_bottom'>
              <img className='game_char game_char_mychar' src={MyCharImg} alt="" />
              <img className='game_char game_char_enemy' src={CharMonster} alt="" />
            </div>
          </div>

          <div className='game_functions_container'>
            <div className='game_functions'>
              <img onClick={handleStartBattle} className={changeScaleStartButton ? 'game_functions_button start_button' : 'game_functions_button start_button_clicked'} src={StartButton} alt="" />
            </div>
          </div>
        </div>
        <div className='view_status_container view_status_container-enemy '>
          <p>Level: {witchLevelCurrent}</p>
          <p>Life: {witchHpCurrent}/{witch.hpmax}</p>
          <p>Attack: {witch.atk}</p>
          <p>Power: {witch.power}</p>
        </div>
        <div className='battle_status_container'>

        </div>

      </main>
      <footer className='footer_game_coin'>
        <div className='footer_game_coin_container'>
          <div>
            <img onClick={HandleCoinClicked} className={changeScale ? 'coinCliked' : 'coin'} src={Coin} alt="" />
          </div>
        </div>
      </footer>

    </div>
  )
}
export default Game