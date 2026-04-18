export interface Animal {
  id: string;
  nameEn: string;
  nameRu: string;
  image: string;
}

export const animals: Animal[] = [
  { id: 'cat', nameEn: 'Cat', nameRu: 'Кошка', image: '/animals/cat.png' },
  { id: 'dog', nameEn: 'Dog', nameRu: 'Собака', image: '/animals/dog.png' },
  { id: 'elephant', nameEn: 'Elephant', nameRu: 'Слон', image: '/animals/elephant.png' },
  { id: 'bunny', nameEn: 'Bunny', nameRu: 'Зайчик', image: '/animals/bunny.png' },
  { id: 'lion', nameEn: 'Lion', nameRu: 'Лев', image: '/animals/lion.png' },
];
