/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReviewsLanding: React.FC = () => {
  return (
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
  );
};

export default ReviewsLanding;
