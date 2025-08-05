import CardTag from './CardTag';

export default function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
      <div className="card-content">
        <h2 className="card-title">{cardObj.title}</h2>
        <p className="card-description">{cardObj.description}</p>
        <p className="card-date">{cardObj.date}</p>

        {/* Tags section */}
        <div className="card-tags">
          <CardTag tag={cardObj.tags[0]} />
          {cardObj.tags[1] && <CardTag tag={cardObj.tags[1]} />}
          {cardObj.tags[2] && <CardTag tag={cardObj.tags[2]} />}
        </div>
      </div>
    </div>
  );
}
