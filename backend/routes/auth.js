const pool = require('../database/database');
const express = require('express');
const { json } = require('express');
const authRoute = express.Router()
authRoute.use(express.json())

const ListUsers = []


authRoute.post('/register', async (req, res) => {
    const { email, password } = req.body;
    // const newUser = {
    //     id: Math.floor(Math.random() * 1000) + 1,
    //     email,
    //     password,
    // };
    // res.send(newUser)
    // ListUsers.push(newUser)
    // console.log(newUser)
    try {
        const newUser = await pool.query(
            'INSERT INTO userscoincLick (email, password) VALUES ($1,$2) RETURNING *',
            [email, password]
        );
        console.log(newUser.rows[0])
        res.status(201).json(newUser.rows[0])
    } catch (error) {
        res.send(`Dont was possible create a user ${error}`)
        console.log(`Dont was possible create a user  ${error}`)
    }
}
)
authRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const loginUser = await pool.query(
            'SELECT * FROM userscoincLick WHERE email = $1',
            [email]
        );
        const databaseEmail = loginUser.rows[0].email
        const databasePassword = loginUser.rows[0].password
        let loginisValid = false
        while (loginisValid === false) {

            if (databaseEmail === email && databasePassword === password) {
                loginisValid = true
                res.send(loginisValid);
                console.log('Loging sucessful !')
            }
            else {
                loginisValid = false
                console.log('Your email or password is incorrect ! \n')
                res.send(loginisValid)       
            }

            break;
        }

    } catch (error) {
        console.log(error)
        res.send('Your email or password is incorrect ! \n')
    }















    // const user = ListUsers.find(user => user.email === email);

    // console.log("USERS LIST >>> ", ListUsers)
    // console.log('Request body:', req.body);

    // if (!user) {
    //     console.log('User not found');
    //     return res.status(404).send('User not found');
    // }

    // if (user.password !== password) {
    //     console.log('user email : ', user.email)
    //     console.log('user password : ', user.password)
    //     console.log('Invalid password');
    //     return res.status(401).send('Invalid password');
    // }

    // console.log('Login successful');
    // res.send('Login successful');
}
)


authRoute.get('/register/:id', async (req, res) => {

    const paramsID = parseInt(req.params.id);
    console.log(`Users List : ${ListUsers}`)
    const user = ListUsers.find(user => user.id === paramsID);
    console.log("Searching the user on the params :", paramsID)
    console.log('user :', user)

    if (isNaN(paramsID)) {
        console.log('Invalid ID:', req.params.id);
        return res.status(400).send('Invalid ID');
    }


    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send(user)

})


authRoute.get('/register', async (req, res) => {
    res.json(ListUsers)
})
authRoute.get('/login', async (req, res) => {
    res.send('login')
})


module.exports = authRoute