import GreenButtom from "./UI/GreenButton";
import { NavLink } from "react-router-dom";

const PurchasesPage = () => {
  return (
    <>
      <div className="content">
        <div className="thereIsNoMarksPage">
          <img
            width={70}
            height={70}
            src="/img/dontHavePurchases.png"
            alt="thereIsNoMarks"
          />
          <h3>У вас нет заказов</h3>
          <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
          <NavLink className="noneStylesForNL" to="/">
            <GreenButtom>Вернуться назад</GreenButtom>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default PurchasesPage;
