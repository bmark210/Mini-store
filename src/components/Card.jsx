import React from "react";
const Card = ({
  item,
  onClickLike,
  id,
  isLiked,
  onClickSelected,
  isSelected,
}) => {
  return (
    <div className="card">
      <img
        onClick={() => onClickLike(id)}
        width={33}
        height={33}
        className="unlike"
        src={`/img/${isLiked ? "like" : "unlike"}.png`}
        alt="heart"
      />

      <img width={133} height={112} src={item.imgUrl} alt="img" />
      <p>{item.title}</p>
      <div>
        <div className="justify_content">
          <span>ЦЕНА</span>
          <b>{item.price} руб.</b>
        </div>

        <img
          onClick={() => onClickSelected(id)}
          className="plus"
          width={13}
          height={13}
          src={`/img/${isSelected ? "select" : "plus"}.svg`}
        />
      </div>
    </div>
  );
};
export default Card;
