import { myCharCurrent, enemies } from './characters.js';
export let battleWins = (false)
//console.log(myCharCurrent, enemies)
// defining const of battle >
export let myCharAttack = myCharCurrent.charWizard.atk;

export const enemyWitchAttack = enemies.witch.atk;
export let enemyWitchHpMax = enemies.witch.hpmax

export let enemyWitchHp = enemyWitchHpMax
export let enemyWitchLevel = enemies.witch.level

let witchHpCurrent = enemies.witch.hp;




export const battle = async (battleWins, myCharAttack, updateWitchHp,updateWitchHpMax, updateWitchLevel,updateWitchAttack,updateWitcPower) => {


  const enemyUpgradeSkills =  () => {

    enemyWitchHpMax = enemyWitchHpMax * enemyWitchLevel;
    witchHpCurrent = enemyWitchHpMax;

    // console.log(enemyWitchLevel)
    // console.log(enemyWitchHpMax)
    console.log(witchHpCurrent)

    updateWitchHp(witchHpCurrent)
    updateWitchHpMax(enemyWitchHpMax)

  }
  
  const uplevelEnemy =  () => {
    if (battleWins === true) {
      enemyWitchLevel += 1
       enemyUpgradeSkills()
      console.log(witchHpCurrent)
      console.log('Your level : ',enemyWitchLevel)
      updateWitchLevel(enemyWitchLevel)
    }
  }

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  while (witchHpCurrent > 0 && !battleWins) {
    
    witchHpCurrent -= myCharAttack
    
    if (witchHpCurrent <= 0 && !battleWins ) {
        battleWins = true
        console.log('Battle finished with witch HP:', witchHpCurrent);
    } else {
      console.log('Continuous battle... Enemy life:', witchHpCurrent);
   
    }
    
    updateWitchHp(witchHpCurrent);
    await delay(1000);
 

  console.log("Battle Wins? :" ,battleWins)
  
  await uplevelEnemy()
  }
  return battleWins
}


