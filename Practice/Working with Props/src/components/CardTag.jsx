const CardTag = ({ cardData }) => {
  const { tags } = cardData;

  return (
    <ul className="card-tags">
      {tags.map((tag) => {
        return (
          <li key={tag} className="card-tag">
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default CardTag;
