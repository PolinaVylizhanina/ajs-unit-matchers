import sortingHealthy from '../app';

test('Check sort 0', () => {
  expect(sortingHealthy(sortingHealthy([
    { name: 'мечник', health: 15 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 60 },
  ]))).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 60 },
    { name: 'мечник', health: 15 },
  ]);
});

test('Check sort 1', () => {
  expect(sortingHealthy(sortingHealthy([
    { name: 'мечник', health: 30 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 10 },
  ]))).toEqual([
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 30 },
    { name: 'лучник', health: 10 },
  ]);
});

test('Check sort 2', () => {
  expect(sortingHealthy(sortingHealthy([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 40 },
    { name: 'лучник', health: 10 },
  ]))).toEqual([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 40 },
    { name: 'лучник', health: 10 },
  ]);
});
