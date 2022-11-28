import React from "react";
const Cart = ({ item, onClickRemoveCart }) => {
  return (
    <div className="cart_item">
      <img width={70} height={70} src={item.imgUrl} alt="sneakers" />
      <div>
        <p>{item.title}</p>
        <b>{item.price} руб.</b>
      </div>
      <img
        onClick={() => onClickRemoveCart(item.id)}
        className="cross"
        width={32}
        height={32}
        src="/img/cross.svg"
      />
    </div>
  );
};
export default Cart;
