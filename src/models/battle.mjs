import { myCharCurrent, enemies } from './characters.js';

console.log(myCharCurrent, enemies)
// defining const of battle >
export let myCharAttack = myCharCurrent.charWizard.atk;
export const enemyWitchAttack = enemies.witch.atk;
export const enemyWitchHpMax = enemies.witch.hpmax
export let enemyWitchHp = enemyWitchHpMax



export const battle = async (enemyWitchHp, myCharAttack, updateWitchHp, updateBattleLog) => {

  let battleLog = []
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  while (enemyWitchHp > 0) {  
    let witchHpCurrent = 0

        const attacktoWitch = enemyWitchHp -= myCharAttack; 
        witchHpCurrent = attacktoWitch;

        if (enemyWitchHp <= 0) {
          witchHpCurrent = 0
          battleLog.push('battle ended');
          
        }

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
  //updateBattleLog([...battleLog]);   
  await delay(1000); 
  }
  return battleLog;
}


