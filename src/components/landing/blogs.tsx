/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogsLanding: React.FC = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo optio
            dolore ratione amet accusamus inventore aliquid
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo optio
            dolore ratione amet accusamus inventore aliquid
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo optio
            dolore ratione amet accusamus inventore aliquid
          </p>
          <a href="#" className="btn">
            Ler mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsLanding;
