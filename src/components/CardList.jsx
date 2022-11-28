import React from "react";
import Card from "./Card";
const CardList = ({
  cards,
  onClickLike,
  likedCards,
  onClickSelected,
  selectedCards,
  value,
}) => {
  return (
    <>
      {cards
        .filter((x) => {
          return x.title.toLowerCase().includes(value.toLowerCase());
        })
        .map((item, index) => (
          <Card
            key={index}
            {...item}
            id={item.id}
            item={item}
            onClickLike={onClickLike}
            isLiked={likedCards.some((x) => x.id === item.id)}
            onClickSelected={onClickSelected}
            isSelected={selectedCards.some((x) => x.id === item.id)}
          />
        ))}
    </>
  );
};
export default CardList;
