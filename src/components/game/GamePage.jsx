import React, { useEffect, useState } from 'react';
import Coin from '../../assets/imgs/icons/coinicon.png';
import StartButton from '../../assets/imgs/icons/startButton.png'
import GoButton from '../../assets/imgs/icons/goButton.png'
import CharMonster from '../../assets/imgs/npcskins/monster.png';
import MyCharImg from '../../assets/imgs/npcskins/char1.png';


import EnemyDefeat from '../../assets/imgs/icons/enemydefeat.png';
import LevelUp from '../../assets/imgs/icons/levelup.png'


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

  const showMycharWizardStatus = () => {

  }

  //Witch

  useEffect(() => {


  }, []);


  //start battle
  const witch = enemies.witch
  const [witchHpCurrent, setWitchHpCurrent] = useState(witch.hp);
  const [updateWitchHpMax, setUpdateWitchHpMax] = useState(witch.hpmax)
  const [updateWitchAttack, setUpdateWitchAttack] = useState(witch.atk)
  const [updateWitchPower, setUpdateWitchPower] = useState(witch.power);
  const [updateWitchLevel, setUpdateWitchLevel] = useState(witch.level);


  const myCharWizard = myCharCurrent.charWizard
  const [myCharHpCurrent, setMyCharHpCurrent] = useState(myCharWizard.hp);
  const [updateMyCharHpMax, setUpdateMyCharHpMax] = useState(myCharWizard.hpmax);
  const [updateMyCharAttack, setUpdateMyCharAttack] = useState(myCharWizard.atk);
  const [updateMyCharPower, setUpdateMyCharPower] = useState(myCharWizard.power);
  const [updateMyCharLevel, setUpdateMyCharLevel] = useState(myCharWizard.level);

  const [battleWins, setBattleWins] = useState(false)

  const handleStartBattle = async () => {
    console.log(
      myCharHpCurrent,
      updateMyCharHpMax,
      updateMyCharAttack,
      updateMyCharPower,
      updateMyCharLevel
    )
    try {
      const results = await battle(
        battleWins,
        setWitchHpCurrent,
        setUpdateWitchHpMax,
        setUpdateWitchLevel,
        setUpdateWitchAttack,
        setUpdateWitchPower,
        //myChar >>

        setMyCharHpCurrent,
        setUpdateMyCharHpMax,
        setUpdateMyCharLevel,
        setUpdateMyCharAttack,
        setUpdateMyCharPower,

      );
      //show level up
      setTimeout(() => {
        setBattleWins(false);
      }, 2000);
      setBattleWins(results);
    } catch (error) {
      console.error('Error during battle:', error);
    }

  };
  //click coin
  const HandleCoinClicked = () => {
    console.log(setUpdateMyCharAttack)
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
          <p>Level: {updateMyCharLevel}</p>
          <p>Life: {myCharHpCurrent}/{updateMyCharHpMax}</p>
          <p>Attack: {updateMyCharAttack}</p>
          <p>Power: {updateMyCharPower}</p>
        </div>

        <div>
          <div className='game_status_container'>
            {witchHpCurrent <= 0 ? <img className='game_window game_image_enemydefeat' src={EnemyDefeat} /> : ''}
           {battleWins === true ? <img className='game_window game_image_levelup' src={LevelUp} /> : ''} 
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
              <img className={changeScaleStartButton ? 'game_functions_button start_button' : 'game_functions_button start_button_clicked'} src={GoButton} alt="" />
            </div>
          </div>
        </div>
        <div className='view_status_container view_status_container-enemy '>
          <p>Level: {updateWitchLevel}</p>
          <p>Life: {witchHpCurrent}/{updateWitchHpMax}</p>
          <p>Attack: {updateWitchAttack}</p>
          <p>Power: {updateWitchPower}</p>
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