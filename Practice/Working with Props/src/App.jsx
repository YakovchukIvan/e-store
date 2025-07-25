import CardList from './components/CardList';
import './index.css';

//Ukr
// 1 - Створити компонент <Card/>, який буде вкладений у <CardContainer/>.
// 2 - Створити компоненти <CardTag/>, які будуть вкладені у <Card/>
// 3 - Передати дані з об'єкта cardData до компонента <Card/> від компонента <CardContainer/> вручну через пропси.
// 4 - Передати дані тегів з об'єкта cardData до компонентів <CardTag/> від компонента <Card/> вручну через пропси.

const cardData = [
  {
    title: 'Мокка',
    description: 'Розвиваємо фінтех-продукт для міжнародного ринку',
    date: '24 квітня 2024',
    imageUrl: '/img-1.jpeg',
    tags: ['#фінтех', '#міжнародний', '#ринок'],
    archived: false,
  },
  {
    title: 'Гроші Наперед',
    description: 'Фронтенд і бекенд для сервісу виплат зарплат на вимогу',
    date: '16 січня 2024',
    imageUrl: '/img-2.jpeg',
    tags: ['#фінанси', '#сервіс', '#виплати'],
    archived: false,
  },
  {
    title: 'ResolHR',
    description: 'Допомогли HR-tech-стартапу з кастомізацією для VIP-клієнтів',
    date: '10 жовтня 2023',
    imageUrl: '/img-3.jpeg',
    tags: ['#HR', '#кастомізація', '#VIP'],
    archived: true,
  },
  {
    title: 'ActivePlatform',
    description: 'Інтеграція Adobe та розвиток платформи комплексної підписки',
    date: '10 листопада 2022',
    imageUrl: '/img-4.jpeg',
    tags: ['#інтеграція', '#платформа', '#підписка'],
    archived: false,
  },
  {
    title: 'START',
    description: 'Розробили платформу A/B тестів для стримінгового сервісу',
    date: '22 вересня 2022',
    imageUrl: '/img-5.jpeg',
    tags: ['#A/B тести', '#стримінг', '#платформа'],
    archived: false,
  },
  {
    title: 'Mindbox',
    description: 'Підтримуємо редизайн платформи автоматизованого маркетингу',
    date: '21 вересня 2022',
    imageUrl: '/img-6.jpeg',
    tags: ['#маркетинг', '#редизайн', '#автоматизація'],
    archived: false,
  },
];

export default function CardContainer() {
  return (
    <div className="card-container">
      <CardList cardData={cardData} />
    </div>
  );
}
