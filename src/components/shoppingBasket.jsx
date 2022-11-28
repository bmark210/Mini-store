import Cart from "./Cart";
import GreenButtom from "./UI/GreenButton";
const ShoppingBasket = ({
  selectedCards,
  setSelectedCards,
  onClickPurchases,
}) => {
  const onClickRemoveCart = (id) => {
    setSelectedCards((prev) => prev.filter((card) => card.id !== id));
  };
  return (
    <>
      <div className="carts_inner">
        {selectedCards.map((item, index) => (
          <Cart item={item} key={index} onClickRemoveCart={onClickRemoveCart} />
        ))}
      </div>
      <div className="cartTotalBlock">
        <li>
          <span>Итого</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%</span>
          <div></div>
          <b>2 498 руб.</b>
        </li>
        <GreenButtom>Оформить заказ</GreenButtom>
      </div>
    </>
  );
};
export default ShoppingBasket;
