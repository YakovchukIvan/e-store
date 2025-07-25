import CardTag from './CardTag';

const CardItem = ({ card }) => (
  <div className="card">
    <img className="card-image" src={card.imageUrl} alt={card.title} />
    <div className="card-content">
      <h2 className="card-title">{card.title}</h2>
      <h4 className="card-description">{card.description}</h4>
      <span className="card-date">{card.date}</span>
      <CardTag tags={card.tags} />
    </div>
  </div>
);

export default CardItem;
