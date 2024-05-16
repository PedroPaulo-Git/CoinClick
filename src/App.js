import './App.css';
import LoginPage from '../src/components/login/LoginPage'
import RegisterPage from '../src/components/register/RegisterPage'
import {Routes,Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import HomeUserPage from './components/home_user/HomeUserPage';
import GamePage from './components/game/GamePage'



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/register/:id' element = {<HomeUserPage/>}/>
        <Route path='/game' element={<GamePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
