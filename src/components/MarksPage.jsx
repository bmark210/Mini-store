import MarksList from "./MarksList";
import GreenButtom from "./UI/GreenButton";
import { NavLink } from "react-router-dom";

const MarksPage = ({
  likedCards,
  onClickLike,
  onClickSelected,
  selectedCards,
}) => {
  return (
    <>
      {likedCards != 0 ? (
        <MarksList
          likedCards={likedCards}
          onClickLike={onClickLike}
          onClickSelected={onClickSelected}
          selectedCards={selectedCards}
        />
      ) : (
        <div className="content">
          <div className="thereIsNoMarksPage">
            <img
              width={70}
              height={70}
              src="/img/dontHaveMarks.png"
              alt="thereIsNoMarks"
            />
            <h3>Закладок нет :( </h3>
            <p>Вы ничего не добавляли в закладки</p>
            <NavLink className="noneStylesForNL" to="/">
              <GreenButtom>Вернуться назад</GreenButtom>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
export default MarksPage;
