import { add } from './utils';

const sum = add(2, 3);

console.log(sum);

const runLazy = async () => {
  const { lazy } = await import('./feature');
  const lazyText = lazy();

  console.log(lazyText);
};

runLazy();
