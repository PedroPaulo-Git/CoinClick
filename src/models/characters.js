
const myCharCurrent =
{
    charWizard: {
        'level':1,
        'exp':0,
        'expmax':100,
        'hpmax': 200,
        'hp':200,
        'atk': 25,
        'power':5
    },
    charBoxer: {
        'level':1,
        'exp':0,
        'expmax':100,
        'hpmax': 200,
        'hp':200,
        'atk': 10,
        'power':0
    }
}

const enemies =

{

    witch: {
        'level':1,
        'exp':15,
        //'expmax':100,
        'hpmax': 200,
        'hp':200,
        'atk': 10,
        'power':5
    },
    monster: {
        'level':1,
        'exp':0,
        //'expmax':100,
        'hpmax': 200,
        'hp':200,
        'atk': 10,
        'power':2
    }


}





//console.log(enemies, myCharCurrent)

module.exports = { myCharCurrent, enemies };