import Card from "./Card";

const MarksList = ({
  likedCards,
  onClickLike,
  onClickSelected,
  selectedCards,
}) => {
  return (
    <>
      <div className="content">
        <h1
          style={{
            paddingTop: "25px",
            marginBottom: "40px",
            width: "800px",
          }}>
          Мои закладки
        </h1>
        <div className="cards__inner">
          {likedCards.map((item, index) => (
            <Card
              item={item}
              key={index}
              id={item.id}
              onClickLike={onClickLike}
              isLiked={likedCards.some((x) => x.id === item.id)}
              onClickSelected={onClickSelected}
              isSelected={selectedCards.some((x) => x.id === item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default MarksList;
