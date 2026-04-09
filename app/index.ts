import { add } from './utils';
import { routes } from './routes';

const sum = add(2, 3);

console.log(sum);

const loadPage = async (name: keyof typeof routes) => {
  const { render } = await routes[name]();

  render();
};

const currentPage = 'home';

loadPage(currentPage);
