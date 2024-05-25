import { myCharCurrent, enemies } from './characters.js';
export let battleWins = false
export let inBattle = false

//myChar Status
let myCharhHpMax = myCharCurrent.charWizard.hpmax
let myCharLevel = myCharCurrent.charWizard.level
let myCharExp = myCharCurrent.charWizard.exp
let myCharExpMax = myCharCurrent.charWizard.expmax

let myCharHpCurrent = myCharCurrent.charWizard.hp;
let myCharAttackCurrent = myCharCurrent.charWizard.atk;
let myCharPowerCurrent = myCharCurrent.charWizard.power;

//enemy Status
let enemyWitchHpMax = enemies.witch.hpmax
let enemyWitchLevel = enemies.witch.level
let witchExp = enemies.witch.exp
//let witchExpMax = enemies.witch.expmax

let witchHpCurrent =parseInt(enemies.witch.hp) ;
let witchAttackCurrent =parseInt(enemies.witch.atk) ;
let witchPowerCurrent =parseInt(enemies.witch.power) 


export const battle = async (
  updateWitchHp,
  updateWitchHpMax,
  updateWitchLevel,
  updateWitchAttack,
  updateWitchPower,
  //updateWitchExp,
  //updateWitchExpMax,
  //
  updateMyCharHp,
  updateMyCharHpMax,
  updateMyCharLevel,
  updateMyCharAttack,
  updateMyCharPower,
  updateMyCharExp,
  updateMyCharExpMax,

) => {

  //myChar functions
  //--------------//

  const myCharUpgradeSkills = () => {
    //life upgrade >
    myCharhHpMax *= myCharLevel;
    myCharHpCurrent = myCharhHpMax;
    // //attack upgrade >
    myCharAttackCurrent *= myCharLevel;
    //power upgrade>
    myCharPowerCurrent *= myCharLevel;
    //return
    updateMyCharHp(myCharHpCurrent);
    updateMyCharHpMax(myCharhHpMax);
    updateMyCharAttack(myCharAttackCurrent);
    updateMyCharPower(myCharPowerCurrent)
  }

  const uplevelMyChar = () => {
    try {
      if (battleWins) {
        console.log('my exp :', myCharExp)
        console.log('my exp MAX :', myCharExpMax)
        console.log("exp enemy: ", witchExp)
        while (myCharExp < myCharExpMax) {
          const leftExp = myCharExpMax - myCharExp
          myCharExp += witchExp
          console.log(`you earn ${witchExp} exp`)
          console.log(`left ${leftExp} to level up`)
          break
        }
        if (myCharExp >= myCharExpMax) {
          myCharExpMax *= 1.5
          myCharExp = 0
          myCharLevel += 1
          myCharUpgradeSkills()
        }
        console.log('level my Char : ', myCharLevel)
        console.log('attack my char', myCharAttackCurrent)
        myCharHpCurrent = myCharhHpMax;
        updateMyCharHp(myCharHpCurrent);
        updateMyCharHpMax(myCharhHpMax);
        updateMyCharLevel(myCharLevel)
        updateMyCharExp(myCharExp)
        updateMyCharExpMax(myCharExpMax)
      }
    } catch (e) {
      console.log('error : ', e)
    }

  }

  //enemy functions
  //--------------//

  const enemyUpgradeSkills = () => {
    //life upgrade >
    enemyWitchHpMax = (Math.floor(enemyWitchHpMax * 1.5));
    witchHpCurrent = (Math.floor(enemyWitchHpMax));
    //attack upgrade >
    witchAttackCurrent = (Math.floor(witchAttackCurrent * 1.45))
    //power upgrade >
    witchPowerCurrent = (Math.floor(witchPowerCurrent * 1.51));
    //exp >
    witchExp = (Math.floor(witchExp * 1.1))
    //return

    updateWitchHp(witchHpCurrent)
    updateWitchHpMax(enemyWitchHpMax)
    updateWitchAttack(witchAttackCurrent)
    updateWitchPower(witchPowerCurrent)
  }

  const uplevelEnemy = () => {
    if (battleWins === true) {
      enemyWitchLevel += 1
      enemyUpgradeSkills()
      updateWitchLevel(enemyWitchLevel)
    }
  }
  //attack my character function
  //--------------//
  const enemyAttack = async () => {
    battleWins = false
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    while (myCharHpCurrent > 0 && !battleWins) {
      inBattle = true
      myCharHpCurrent -= witchAttackCurrent

      if (myCharHpCurrent <= 0) {
        battleWins = true
        inBattle = false
        //console.log('Battle finished with my character HP:', myCharHpCurrent);
      } else {
        //console.log('Continuous battle... my character life:', myCharHpCurrent);

      }
      updateMyCharHp(myCharHpCurrent);
      await delay(1000);

    }

  }

  //attack enemy function
  //--------------//
  const myCharAttack = async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    battleWins = false
    while (witchHpCurrent > 0 && !battleWins) {
      inBattle = true
      witchHpCurrent -= myCharAttackCurrent

      if (witchHpCurrent <= 0 && !battleWins) {
        battleWins = true
        inBattle = false
        //console.log('Battle finished with witch HP:', witchHpCurrent);
      } else if (myCharHpCurrent < 0 && !battleWins) {
        console.log('you lost this round !!!!!!!!!!!!!!');
        battleWins = true
        inBattle = false
      }

      updateWitchHp(witchHpCurrent);
      await delay(1000);

      console.log("Battle Wins? :", battleWins)

      uplevelEnemy()
      uplevelMyChar()
    }

  }
  enemyAttack()
  myCharAttack()

  return
}


