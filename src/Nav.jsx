import {} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import './style.scss'

export default function Nav ( ){

  const navigate= useNavigate();

  const handleLogout= async()=>{
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('senhaData');
      alert('Sessão Finalizada');
      navigate('/');
  }

  return(
    <>
    <header>
      <img className='logo' src={logo} />
      <NavLink className='navigation-a' to="/">PÁGINA INICIAL </NavLink>
      <NavLink className='navigation-a' to="/Aplicativo">APLICATIVO </NavLink>
      <NavLink className='navigation-a' to="/Sobre">SOBRE NÓS </NavLink>
      <NavLink className='navigation-a' to="/Projeto">PROJETO</NavLink>
      <NavLink className='navigation-a' to="/Login">LOGIN</NavLink>
      <button className='buttonlogout' onClick={handleLogout}> Logout </button> 
    </header>
    </>
  )
}
