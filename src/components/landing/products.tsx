/* eslint-disable @next/next/no-img-element */
import React from "react";
import Script from "next/script";

const ProductsLanding: React.FC = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        nossos <span>produtos</span>
      </h1>
      <div className="swiper product-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src="images/product1.jpeg" alt="" />
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
            <img src="images/product2.jpeg" alt="" />
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
            <img src="images/product3.jpeg" alt="" />
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
            <img src="images/product4.jpeg" alt="" />
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
            <img src="images/product5.jpeg" alt="" />
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
            <img src="images/product6.jpeg" alt="" />
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
            <img src="images/product7.jpeg" alt="" />
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
            <img src="images/product8.jpeg" alt="" />
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
  );
};

export default ProductsLanding;
