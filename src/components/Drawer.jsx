import React from "react";
import ShoppingBasket from "./shoppingBasket";
import EmtyShoppingBasket from "./EmtyShoppingBasket";
const Drawer = ({
  onClickOut,
  selectedCards,
  setSelectedCards,
  onClickPurchases,
}) => {
  return (
    <>
      <div className="drawer">
        <h2>
          Корзина
          <img
            style={{ cursor: "pointer" }}
            onClick={onClickOut}
            className="cross"
            width={32}
            height={32}
            src="/img/cross.svg"
          />
        </h2>
        {selectedCards.length != 0 ? (
          <ShoppingBasket
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            onClickPurchases={onClickPurchases}
          />
        ) : (
          <EmtyShoppingBasket onClickOut={onClickOut} />
        )}
      </div>
    </>
  );
};
export default Drawer;
