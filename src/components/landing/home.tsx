import React from "react";

const HomeLanding: React.FC = () => {
  return (
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
  );
};

export default HomeLanding;
