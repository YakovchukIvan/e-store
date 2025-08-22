import { CardType } from '../types';
import Card from './Card';

type CardContainerProps = {
  cards: CardType[];
};

export default function CardContainer({ cards = [] }: CardContainerProps) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.title} cardObj={card} />
      ))}
    </div>
  );
}
