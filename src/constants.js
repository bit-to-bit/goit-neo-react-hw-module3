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
