import { useState } from 'react';
import './index.css';
import CardContainer from './components/CardContainer';

//UA
// 1 - Створіть стан isOpen для керування відкриттям і закриттям додатків. Інтерфейс відкривається при натисканні на хрестик і відображається при натисканні на кнопку «Начать».
// 2 - Реалізуйте функції відображення карточек в залежності від активного вкладки. Переключати вкладки можна як натисканням на кнопки «Попередня» і «Далі», так і натисканням на саму вкладку.

const cardData = [
  {
    title: 'Mocha',
    description: 'Developing a fintech product for the international market',
    date: 'April 24, 2024',
    imageUrl: '/img-1.jpeg',
    tags: ['#fintech', '#international', '#market'],
    archived: false,
  },
  {
    title: 'Money Forward',
    description: 'Frontend and backend for a salary payout service on demand',
    date: 'January 16, 2024',
    imageUrl: '/img-2.jpeg',
    tags: ['#finance', '#service', '#payouts'],
    archived: false,
  },
  {
    title: 'ActivePlatform',
    description: 'Adobe integration and platform development for comprehensive subscriptions',
    date: 'November 10, 2022',
    imageUrl: '/img-4.jpeg',
    tags: ['#integration', '#platform', '#subscription'],
    archived: false,
  },
  {
    title: 'START',
    description: 'Developed an A/B testing platform for a streaming service',
    date: 'September 22, 2022',
    imageUrl: '/img-5.jpeg',
    tags: ['#A/B testing', '#streaming', '#platform'],
    archived: false,
  },
  {
    title: 'Mindbox',
    description: 'Supporting the redesign of an automated marketing platform',
    date: 'September 21, 2022',
    imageUrl: '/img-6.jpeg',
    tags: ['#marketing', '#redesign', '#automation'],
    archived: false,
  },
];

const tabData = [
  [cardData[0], cardData[1]], // Tab 1
  [cardData[2], cardData[3]], // Tab 2
  [cardData[4]], // Tab 3
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState(1);

  const handlePage = (number) => {
    setActive(number);
  };

  const changePage = (direction) => {
    const newActive = active + direction;

    if (newActive >= 1 && newActive <= tabData.length) {
      setActive(newActive);
    }
  };

  return (
    <>
      {isOpen ? (
        <button onClick={() => setIsOpen((prev) => !prev)}>Start</button>
      ) : (
        <div className="app">
          <h1>State Tabs Card Display</h1>

          <span onClick={() => setIsOpen((prev) => !prev)} className="close">
            &times;
          </span>
          <div className="tab-buttons">
            <button
              onClick={() => handlePage(1)}
              className={`tab-button  ${active === 1 ? 'active' : ''}`}
            >
              Tab 1
            </button>
            <button
              onClick={() => handlePage(2)}
              className={`tab-button  ${active === 2 ? 'active' : ''}`}
            >
              Tab 2
            </button>
            <button
              onClick={() => handlePage(3)}
              className={`tab-button  ${active === 3 ? 'active' : ''}`}
            >
              Tab 3
            </button>
          </div>

          <CardContainer cards={tabData[active - 1]} />

          <div className="navigation-buttons">
            <button onClick={() => changePage(-1)} disabled={active === 1}>
              &lt; Previous
            </button>
            <button onClick={() => changePage(1)} disabled={active === tabData.length}>
              Next &gt;
            </button>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Technologies used:</strong> React, JSX, useState, Conditional Rendering, CSS
        Modules, Event Handling.
      </p>
    </footer>
  );
}
