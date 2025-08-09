import { useState } from 'react';
import Main from './components/Main';
import './index.css';
import ModalWindow from './components/Modal';
import Button from './components/Button';

// 1. Створіть окремі компоненти:
//- Button: універсальний компонент кнопки.
// - Modal: універсальний компонент модального вікна.
// - Main: компонент, що представляє основний вміст програми.

// 2. Розмістіть файли компонентів:
// - Розмістіть компоненти Button, Modal і Main в окремі файли всередині папки src/components.

// 3. Експортуйте та імпортуйте компоненти:
// - Експортуйте Button, Modal і Main із їхніх файлів.
// - Імпортуйте ці компоненти у тих місцях, де вони використовуються.

// 4. Створіть універсальний компонент Button:
// - Налаштуйте компонент так, щоб він:
// - Приймав проп `children` для відображення тексту всередині кнопки.
// - Приймав проп зміни CSS-класу кнопки:
// - Наприклад, клас "button" для однієї стилізації та "closeButton" для іншої.
// - Дозволяв додавати різні функції в onClick (наприклад, для закриття модального вікна).

// 5. Створіть універсальний компонент Modal:
// - Налаштуйте модальне вікно за допомогою наступних пропсів:
// - `title`: текст заголовка вікна.
// - `content`: вміст вікна (текст чи компоненти).
// - `showCloseButton`: прапор, який керує відображенням кнопки закриття.

// 6. Створіть функцію в App:
// - Напишіть функцію в компоненті App, яку можна передавати через пропси компонент Button.
// - Ця функція виконуватиме будь-яку дію, наприклад, відкривати або закривати модальне вікно.

// 7. Позбавтеся "prop drilling":
// - Використовуйте техніку component composition, щоб передавати дані та функції безпосередньо між компонентами.
// - Це допоможе уникнути передачі пропсів через проміжний компонент Main.

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const alertCloseModal = () => {
    alert('OK');
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Main isModalOpen={isModalOpen} openModal={openModal}>
        <ModalWindow
          title="Confirm Your Action"
          content="Are you sure you want to proceed? This action cannot be undone."
          showButton
          closeModal={closeModal}
          alertCloseModal={alertCloseModal}
        >
          <Button handleClick={closeModal} variant={'closeButton'}>
            &times;
          </Button>

          <Button handleClick={closeModal} variant={'secondaryButton'}>
            Cancel
          </Button>

          <Button handleClick={alertCloseModal} variant={'primaryButton'}>
            Yes, Continue
          </Button>
        </ModalWindow>
      </Main>
    </div>
  );
}

export default App;
