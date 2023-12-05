/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="box-container">
        <div className="box">
          <h3>
            <i className="far fa-gem"> Accessory Company</i>
          </h3>
          <p>
            A Accessory Company é uma empresa criada por Elayne Mota, para
            trazer o melhor do mundo feminino para a mulher, sem sair de casa.
          </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <h3>Informações de contato!</h3>
          <a href="#" className="links">
            <i className="fas fa-phone"></i> (61) 9.9916-5485
          </a>
          <a href="#" className="links">
            <i className="fas fa-envelope"></i> accessorycompany@gmail.com
          </a>
          <a href="#" className="links">
            <i className="fas fa-map-marker-alt"></i> Brasilia-DF, Conjunto
            Nacional
          </a>
        </div>

        <div className="box">
          <h3>links rápidos</h3>
          <a href="#home" className="links">
            <i className="fas fa-arrow-right"></i> Home
          </a>
          <a href="#products" className="links">
            <i className="fas fa-arrow-right"></i> Produtos
          </a>
          <a href="#categories" className="links">
            <i className="fas fa-arrow-right"></i> Categorias
          </a>
          <a href="#review" className="links">
            <i className="fas fa-arrow-right"></i> Avaliações
          </a>
          <a href="#blogs" className="links">
            <i className="fas fa-arrow-right"></i> Blogs
          </a>
          <a href="#contact" className="links">
            <i className="fas fa-arrow-right"></i> Contatos
          </a>
        </div>

        <div className="box">
          <h3>Novidades!</h3>
          <p>Inscreva-se para novidades toda semana!</p>
          <input type="email" placeholder="Seu e-mail" className="email" />
          <input type="submit" value="subscribe" className="btn" />
          <img src="images/payment.png" className="payment-img" alt="" />
        </div>
      </div>
      <div className="credit">
        Criado por <span>Daniel Mota - DanDev</span> | Todos os direitos
        reservados. 2021.
      </div>
    </footer>
  );
};

export default Footer;
