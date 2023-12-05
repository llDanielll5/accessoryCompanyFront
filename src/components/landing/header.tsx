/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Cart from "./cart";

const navList = [
  { link: "#home", text: "Home" },
  { link: "#products", text: "Produtos" },
  { link: "#categories", text: "Categorias" },
  { link: "#review", text: "Avaliações" },
  { link: "#blogs", text: "Blogs" },
  { link: "#contact", text: "Contatos" },
];

const HeaderLanding: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="far fa-gem"> accessory company </i>
      </a>

      <nav className="navbar">
        {navList.map((v, i) => (
          <a href={v.link} key={i}>
            {v.text}
          </a>
        ))}
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
      </div>

      <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="Procure aqui..." />
        {/* <label for="search-box" className="fas fa-search"></label> */}
      </form>

      <Cart />

      <form action="" className="login-form">
        <h3>Entrar</h3>
        <input type="email" placeholder="Seu e-mail" className="box" />
        <input type="password" placeholder="Sua senha" className="box" />
        <p>
          Esqueceu a sua senha? <a href="#">Clique aqui!</a>
        </p>
        <p>
          Não possui uma conta? <a href="#">Criar agora!</a>
        </p>
        <input type="submit" value="Entrar" className="btn" />
      </form>
    </header>
  );
};

export default HeaderLanding;
