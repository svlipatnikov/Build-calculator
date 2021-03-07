import AuthPage from './AuthPage';
import CustomerPage from './CustomerPage';
import Estimate from './Estimate/Estimate';
import CustomersListPage from './CustomersListPage';

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
