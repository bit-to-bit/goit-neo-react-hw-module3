export const options = [
  { name: 'good', isPositive: true },
  { name: 'neutral', isPositive: true },
  { name: 'bad', isPositive: false },
];

export const allOptions = options.map(({ name }) => name);

export const positiveOptions = options
  .filter(({ isPositive }) => isPositive)
  .map(({ name }) => name);

export const feedbackInitialState = Object.fromEntries(
  options.map(({ name }) => [name, 0])
);

export const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
