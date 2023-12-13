import React from "react";
import logoPath from '../images/logo.svg';
import { Link, Route, Routes } from "react-router-dom";

function Header({ userEmail, onSignOut }) {
return (
    <header className="header">
      <img src={logoPath} alt="Логотип Mesto" className="logo"/>
      <Routes>
        <Route path="/sign-in" element={
          <Link to="/sign-up" className="link">
            Регистрация
          </Link>
        }/>

        <Route path="/sign-up" element={
          <Link to="/sign-in" className="link">
            Вход
          </Link>
        } />

        <Route path="/" element={
          <div className="header__container">
            <p className="header__email">{ userEmail }</p>
            <Link to="/sign-in" className="link link_type_logout" onClick={ onSignOut }>
              Выйти
            </Link>
          </div>
        }></Route>
      </Routes>
        

      
      
    </header>
);
}

export default Header;