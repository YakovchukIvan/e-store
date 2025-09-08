import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorFallback() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Помилка {error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Unknown Error</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
}
