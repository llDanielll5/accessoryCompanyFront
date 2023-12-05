/* eslint-disable @next/next/no-img-element */
import React from "react";

const Cart: React.FC = () => {
  const ItemCart = (id: string) => (
    <div className="box">
      <i className="fas fa-trash"></i>
      <img src="/images/cart1.jpeg" alt="" />
      <div className="content">
        <h3>Produto no Carrinho</h3>
        <span className="price">R$ 10,00/-</span>
        <span className="quantity">Qtd: 1</span>
      </div>
    </div>
  );

  return (
    <div className="shopping-cart">
      {ItemCart("1")}

      <div className="total"> total: R$ 00,00</div>
      <a href="/comprar" className="btn">
        Comprar
      </a>
    </div>
  );
};

export default Cart;
