import React from "react";
import CardList from "./CardList";
import SearchBlock from "./SearchBlock";
import "../index.scss";
////////////////////

function Home({
  onClickOut,
  selectedCards,
  setSelectedCards,
  open,
  onClickOpen,
  cards,
  likedCards,
  onClickLike,
  onClickSelected,
  value,
  setValue,
  onChangeValue,
}) {
  return (
    <div className="wrapper">
      {/* <Header onClickOpen={onClickOpen} /> */}
      <div className="content">
        <SearchBlock
          onChangeValue={onChangeValue}
          value={value}
          setValue={setValue}
        />
        <div className="cards__inner">
          <CardList
            cards={cards}
            likedCards={likedCards}
            onClickLike={onClickLike}
            selectedCards={selectedCards}
            onClickSelected={onClickSelected}
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
