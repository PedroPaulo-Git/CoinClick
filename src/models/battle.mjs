import { myCharCurrent, enemies } from './characters.js';

console.log(myCharCurrent, enemies)
// defining const of battle >
export let myCharAttack = myCharCurrent.charWizard.atk;
export const enemyWitchAttack = enemies.witch.atk;
export const enemyWitchHpMax = enemies.witch.hpmax
export let enemyWitchHp = enemyWitchHpMax
export let enemyWitchLevel = enemies.witch.level



export const battle = async (enemyWitchHp, myCharAttack, updateWitchHp, updateWitchLevel) => {

  const uplevelEnemy=()=>{
    
      if ( enemyWitchHp <=0 ) {
        enemyWitchHp = 0
        enemyWitchLevel += 1
        console.log(enemyWitchLevel)
      }
  }

  let battleLog = []
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  while (enemyWitchHp > 0) {  
    
    let witchHpCurrent = 0

        const attacktoWitch = enemyWitchHp -= myCharAttack; 
        witchHpCurrent = attacktoWitch;
        
        if (enemyWitchHp <= 0) {
          battleLog.push(enemyWitchHp);
          console.log('battle finish')  
        } else {
          battleLog.push(enemyWitchHp)
          battleLog.push(`${witchHpCurrent}`);
        }
        
  console.log(enemyWitchHp)
  battleLog.push(enemyWitchHp); 
  updateWitchHp(witchHpCurrent);
  await delay(1000); 
  }

  battleLog.push(updateWitchLevel)
  updateWitchLevel(enemyWitchLevel)
  uplevelEnemy()

  return battleLog;
}


