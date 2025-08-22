type CardTagProps = {
  tag: string;
};

export default function CardTag({ tag }: CardTagProps) {
  return <span className="card-tag">{tag}</span>;
}
