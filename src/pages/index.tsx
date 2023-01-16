//@ts-nocheck
/* eslint-disable */

import React from "react";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></Script>
      <Script type="text/javascript" src="js/script.js"></Script>
      <header className="header">
        <a href="#" className="logo">
          <i className="far fa-gem"> accessory company </i>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Produtos</a>
          <a href="#categories">Categorias</a>
          <a href="#review">Avaliações</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contato</a>
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

        <div className="shopping-cart">
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="/images/cart1.jpeg" />
            <div className="content">
              <h3>Produto no Carrinho</h3>
              <span className="price">R$ 10,00/-</span>
              <span className="quantity">Qtd: 1</span>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="images/cart2.jpeg" />
            <div className="content">
              <h3>Produto no Carrinho 2</h3>
              <span className="price">R$ 20,00/-</span>
              <span className="quantity">Qtd: 3</span>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="images/cart3.jpeg" />
            <div className="content">
              <h3>Produto no Carrinho 3</h3>
              <span className="price">R$ 5,00/-</span>
              <span className="quantity">Qtd: 7</span>
            </div>
          </div>
          <div className="total"> total: R$ XX,XX/-</div>
          <a href="#" className="btn">
            {" "}
            Comprar
          </a>
        </div>

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

      <section className="home" id="home">
        <div className="content">
          <h3>
            Produtos <span>imperdíveis</span> para você.
          </h3>
          <p>Novidades toda semana!</p>
          <a href="#" className="btn">
            Comprar agora
          </a>
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          nossos <span>produtos</span>
        </h1>
        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="images/product1.jpeg" />
              <h3>Pulseira ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product2.jpeg" />
              <h3>Pulseira ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product3.jpeg" />
              <h3>Pulseira ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product4.jpeg" />
              <h3>Anel ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>
          </div>
        </div>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="images/product5.jpeg" />
              <h3>anel ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product6.jpeg" />
              <h3>anel ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product7.jpeg" />
              <h3>anel ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="images/product8.jpeg" />
              <h3>brinco ouro</h3>
              <div className="price">R$ 10,00/- - R$25,00/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                adicionar ao carrinho
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="categories" id="categories">
        <h1 className="heading">
          Todas <span>categorias</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/cat1.jpeg" />
            <h3>Pulseiras</h3>
            <p>até 50% de desconto!</p>
            <a href="#" className="btn">
              Comprar agora
            </a>
          </div>

          <div className="box">
            <img src="images/cat2.png" />
            <h3>Colares</h3>
            <p>até 50% de desconto!</p>
            <a href="#" className="btn">
              Comprar agora
            </a>
          </div>

          <div className="box">
            <img src="images/cat3.jpeg" />
            <h3>anéis</h3>
            <p>até 50% de desconto!</p>
            <a href="#" className="btn">
              Comprar agora
            </a>
          </div>

          <div className="box">
            <img src="images/cat4.jpeg" />
            <h3>brincos</h3>
            <p>até 50% de desconto!</p>
            <a href="#" className="btn">
              Comprar agora
            </a>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">
          Nossas <span>avaliações</span>
        </h1>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="images/pic-1.png" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quas veniam vitae quisquam alias velit numquam
                laudantium, molestias optio doloremque repellendus deserunt
                perspiciatis! Laborum nihil blanditiis quidem nam vero atque.
              </p>
              <h3>Nome de Usuário</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="images/pic-2.png" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quas veniam vitae quisquam alias velit numquam
                laudantium, molestias optio doloremque repellendus deserunt
                perspiciatis! Laborum nihil blanditiis quidem nam vero atque.
              </p>
              <h3>Nome de Usuário</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="images/pic-3.png" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quas veniam vitae quisquam alias velit numquam
                laudantium, molestias optio doloremque repellendus deserunt
                perspiciatis! Laborum nihil blanditiis quidem nam vero atque.
              </p>
              <h3>Nome de Usuário</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="images/pic-4.png" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quas veniam vitae quisquam alias velit numquam
                laudantium, molestias optio doloremque repellendus deserunt
                perspiciatis! Laborum nihil blanditiis quidem nam vero atque.
              </p>
              <h3>Nome de Usuário</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading">
          nossos <span>blogs</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/blog1.jpeg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user"></i>por usuário
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i>1 Abr, 2021
                </a>
              </div>
            </div>
            <h3>Como cuidar de suas semi-jóias.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              optio dolore ratione amet accusamus inventore aliquid
            </p>
            <a href="#" className="btn">
              Ler mais
            </a>
          </div>

          <div className="box">
            <img src="images/blog2.jpeg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user"></i>por usuário
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i>1 Abr, 2021
                </a>
              </div>
            </div>
            <h3>Qual a joia ideal para um jantar?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              optio dolore ratione amet accusamus inventore aliquid
            </p>
            <a href="#" className="btn">
              Ler mais
            </a>
          </div>

          <div className="box">
            <img src="images/blog3.jpeg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user"></i>por usuário
                </a>
                <a href="#">
                  <i className="fas fa-calendar"></i>1 Abr, 2021
                </a>
              </div>
            </div>
            <h3>Quebrei minha jóia, e agora?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              optio dolore ratione amet accusamus inventore aliquid
            </p>
            <a href="#" className="btn">
              Ler mais
            </a>
          </div>
        </div>
      </section>

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
            <img src="images/payment.png" className="payment-img" />
          </div>
        </div>
        <div className="credit">
          Criado por <span>Daniel Mota - DanDev</span> | Todos os direitos
          reservados. 2021.
        </div>
      </footer>
    </>
  );
}
