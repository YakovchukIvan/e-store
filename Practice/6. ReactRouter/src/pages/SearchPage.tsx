// 01. Пропишіть в URL шлях /searchpage?q=hello-world!
// 02. Виберіть значення параметра рядка запиту та відобразіть його в <p>Термін пошуку: </p>
// 03. Створіть функцію, яка буде змінювати значення параметра q у рядку запиту на те, що буде введено у вхід.

function SearchPage() {
  return (
    <div>
      <h1>Search Results</h1>
      <p>Search term: </p>

      {/* Поле введення для зміни строки запиту */}
      <input type="text" value={''} />
    </div>
  );
}

export default SearchPage;
