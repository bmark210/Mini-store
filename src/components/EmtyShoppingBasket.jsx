import GreenButtom from "./UI/GreenButton";

const EmtyShoppingBasket = ({ onClickOut }) => {
  return (
    <div className="EmtyShoppingBasket">
      <div>
        <img width={120} height={120} src="./img/emptybox.png" alt="emptybox" />
        <b>Корзина пустая</b>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      </div>
      <GreenButtom onClick={onClickOut}>Вернуться назад</GreenButtom>
    </div>
  );
};
export default EmtyShoppingBasket;
