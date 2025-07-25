import CardItem from './CardItem';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((item) => (
        <CardItem key={item.title} card={item} />
      ))}
    </div>
  );
};

export default CardList;
