interface RenderErrorProps {
  error: string;
}

const RenderError = ({ error }: RenderErrorProps): JSX.Element => {
  return <p>{error}</p>;
};

export default RenderError;
