// 01. Пропишіть в URL шлях /searchpage?q=hello-world!
// 02. Виберіть значення параметра рядка запиту та відобразіть його в <p>Термін пошуку: </p>
// 03. Створіть функцію, яка буде змінювати значення параметра q у рядку запиту на те, що буде введено у вхід.

import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('q') ?? '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams({ q: value });
  };

  return (
    <div>
      <h1>Search Results</h1>
      <p>Search term: {searchTerm}</p>

      <input type="text" value={searchTerm} onChange={handleChange} />
    </div>
  );
}

export default SearchPage;
