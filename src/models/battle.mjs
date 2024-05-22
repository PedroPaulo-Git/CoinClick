import { myCharCurrent, enemies } from './characters.js';
export let battleWins = (false)
//console.log(myCharCurrent, enemies)
// defining const of battle >
let myCharAttack = myCharCurrent.charWizard.atk;
let myCharhHpMax = myCharCurrent.charWizard.hpmax
let myCharHp = myCharhHpMax
let myCharLevel = myCharCurrent.charWizard.level


let myCharHpCurrent = myCharCurrent.charWizard.hp;
let myCharAttackCurrent = myCharCurrent.charWizard.atk;
let myCharPowerCurrent = myCharCurrent.charWizard.power;

//enemy Status

let enemyWitchAttack = enemies.witch.atk;
let enemyWitchHpMax = enemies.witch.hpmax
let enemyWitchHp = enemyWitchHpMax
let enemyWitchLevel = enemies.witch.level

let witchHpCurrent = enemies.witch.hp;
let witchAttackCurrent = enemies.witch.atk;
let witchPowerCurrent = enemies.witch.power





export const battle = async (
  battleWins,
  updateWitchHp,
  updateWitchHpMax,
  updateWitchLevel,
  updateWitchAttack,
  updateWitchPower,
  //
  updateMyCharHp,
  updateMyCharHpMax,
  updateMyCharLevel,
  updateMyCharAttack,
  updateMyCharPower,

) => {
  const myCharUpgradeSkills = () => {
    //life upgrade >
    myCharhHpMax *= myCharLevel;
    myCharHpCurrent = myCharhHpMax;
    // //attack upgrade >
    myCharAttackCurrent *= myCharLevel;
    console.log(myCharAttackCurrent);
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
        myCharLevel += 1
        myCharUpgradeSkills()
        console.log('Your level Char : ', myCharLevel)
        console.log('attack char', myCharAttackCurrent)
        updateMyCharLevel(myCharLevel)
      }
    } catch (e) {
      console.log('error : ', e)
    }

  }

  //enemy functions
  //--------------//

  const enemyUpgradeSkills = () => {
    //life upgrade >
    enemyWitchHpMax = enemyWitchHpMax * enemyWitchLevel;
    witchHpCurrent = enemyWitchHpMax;
    //attack upgrade >
    witchAttackCurrent = witchAttackCurrent * enemyWitchLevel;
    //power upgrade >
    witchPowerCurrent *= enemyWitchLevel;
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
      console.log('Your level : ', enemyWitchLevel)
      updateWitchLevel(enemyWitchLevel)
    }
  }

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  while (witchHpCurrent > 0 && !battleWins) {


    witchHpCurrent -= myCharAttackCurrent

    if (witchHpCurrent <= 0 && !battleWins) {
      battleWins = true
      console.log('Battle finished with witch HP:', witchHpCurrent);
    } else {
      console.log('Continuous battle... Enemy life:', witchHpCurrent);

    }

    updateWitchHp(witchHpCurrent);
    await delay(1000);


    console.log("Battle Wins? :", battleWins)

    uplevelEnemy()
    uplevelMyChar()

  }
  return battleWins
}


