import AuthPage from '../pages/AuthPage';
import CustomerPage from '../pages/CustomerPage';
import Estimate from '../pages/Estimate';
import CustomersListPage from '../pages/CustomersListPage';

const routes = [
  {
    path: '/',
    component: AuthPage,
  },
  {
    path: '/customers',
    component: CustomersListPage,
  },
  {
    path: '/customers/:id',
    component: CustomerPage,
  },
  {
    path: '/estimate/:id',
    component: Estimate,
  },
];

export default routes;
