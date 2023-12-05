/* eslint-disable @next/next/no-img-element */
import React from "react";

const CategoriesLanding: React.FC = () => {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Todas <span>categorias</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="images/cat1.jpeg" alt="" />
          <h3>Pulseiras</h3>
          <p>até 50% de desconto!</p>
          <a href="#" className="btn">
            Comprar agora
          </a>
        </div>

        <div className="box">
          <img src="images/cat2.png" alt="" />
          <h3>Colares</h3>
          <p>até 50% de desconto!</p>
          <a href="#" className="btn">
            Comprar agora
          </a>
        </div>

        <div className="box">
          <img src="images/cat3.jpeg" alt="" />
          <h3>anéis</h3>
          <p>até 50% de desconto!</p>
          <a href="#" className="btn">
            Comprar agora
          </a>
        </div>

        <div className="box">
          <img src="images/cat4.jpeg" alt="" />
          <h3>brincos</h3>
          <p>até 50% de desconto!</p>
          <a href="#" className="btn">
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesLanding;
