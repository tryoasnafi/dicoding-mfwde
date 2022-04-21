import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Home,
};

export default routes;