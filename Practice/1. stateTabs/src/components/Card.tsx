import { CardType } from '../types';
import CardTag from './CardTag';

type CardProps = {
  cardObj: CardType;
};

export default function Card({ cardObj }: CardProps) {
  return (
    <div className="card">
      <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
      <div className="card-content">
        <h2 className="card-title">{cardObj.title}</h2>
        <p className="card-description">{cardObj.description}</p>
        <p className="card-date">{cardObj.date}</p>

        <div className="card-tags">
          {cardObj.tags.map((tag, index) => (
            <CardTag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
