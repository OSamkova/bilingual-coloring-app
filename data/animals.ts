export interface Animal {
  id: string;
  nameEn: string;
  nameRu: string;
}

export const animals: Animal[] = [
  { id: 'cat', nameEn: 'Cat', nameRu: 'Кошка' },
  { id: 'dog', nameEn: 'Dog', nameRu: 'Собака' },
  { id: 'elephant', nameEn: 'Elephant', nameRu: 'Слон' },
  { id: 'bunny', nameEn: 'Bunny', nameRu: 'Зайчик' },
  { id: 'lion', nameEn: 'Lion', nameRu: 'Лев' },
];
