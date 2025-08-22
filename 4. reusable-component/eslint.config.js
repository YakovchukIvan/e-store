import js from '@eslint/js'; // Базові ESLint правила для JS
import globals from 'globals'; // Глобальні змінні для браузера
import reactHooks from 'eslint-plugin-react-hooks'; // Перевірки правил хуків
import reactRefresh from 'eslint-plugin-react-refresh'; // Плагін для Vite + React Fast Refresh
import react from 'eslint-plugin-react'; // Плагін для React
import prettier from 'eslint-plugin-prettier'; // Інтеграція форматування коду Prettier
import tseslint from 'typescript-eslint'; // Плагін і парсер для TypeScript
import { globalIgnores } from 'eslint/config'; // Ігнорування директорій глобально

export default tseslint.config([
  globalIgnores(['dist']), // Ігнорувати директорію dist
  {
    files: ['**/*.{ts,tsx}'], // Застосовувати правила лише до TypeScript/TSX файлів
    plugins: {
      react, // React-плагін
      reactHooks, // React Hooks плагін
      reactRefresh, // Vite Fast Refresh плагін
      prettier, // Prettier плагін
    },
    languageOptions: {
      ecmaVersion: 2020, // Підтримка сучасного синтаксису ES2020
      globals: globals.browser, // Встановлення браузерних глобальних змінних (window, document тощо)
      parser: tseslint.parser, // Використання парсера для TypeScript
      parserOptions: {
        sourceType: 'module', // Дозволити імпорти/експорти (ES-модулі)
        ecmaFeatures: {
          jsx: true, // Увімкнення JSX
        },
      },
    },
    rules: {
      // 🔧 TypeScript / JS стиль
      'func-style': ['error', 'expression'], // Дозволяє лише стрілкові функції (const fn = () => {})
      'prefer-arrow-callback': ['error'], // Вимагає стрілкові функції в колбеках (map, forEach тощо)
      'arrow-body-style': ['error', 'as-needed'], // Стрілки без {} і return, коли це можливо

      // ⚙️ Загальні
      complexity: ['error', 5], // Обмежити складність функцій (не більше 5 умов/гілок в файлі)
      curly: ['error', 'multi-line'], // Обов'язкові дужки для багаторядкових умов
      'max-lines': ['error', 255], // Максимум 255 рядків у файлі

      // ⚛️ React
      'react/display-name': 'off', // Не вимагати назви для анонімних компонентів
      'react/jsx-fragments': ['warn', 'element'], // Рекомендовано писати <React.Fragment> замість <> </>
      'react/prop-types': 'off', // Не використовувати PropTypes (бо є TypeScript)

      // 🔁 React Hooks
      'react-hooks/exhaustive-deps': 'off', // Вимкнено перевірку залежностей в useEffect
      'react-hooks/rules-of-hooks': 'warn', // Попередження при неправильному використанні хуків

      // 🎨 Prettier
      'prettier/prettier': 'error', // Форматування коду згідно з Prettier — помилка, якщо не відповідає
    },
    settings: {
      react: {
        version: 'detect', // Автоматичне визначення версії React
      },
    },
    extends: [
      js.configs.recommended, // Базові рекомендовані правила ESLint
      tseslint.configs.recommended, // Рекомендовані правила для TypeScript
      reactHooks.configs['recommended-latest'], // Найновіші правила для React Hooks
      reactRefresh.configs.vite, // Налаштування для роботи з Vite та React Fast Refresh
      'plugin:prettier/recommended', // додає плагін Prettier і вимикає конфліктуючі правила
    ],
  },
]);
