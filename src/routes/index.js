import AuthPage from '../pages/AuthPage';
import CustomerPage from '../pages/CustomerPage';
import Estimate from '../pages/Estimate';
import CustomersListPage from '../pages/CustomersListPage';
import CalculationFormPage from '../pages/CalculationFormPage';

const routes = [
  {
    path: '/login',
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
    path: '/calculation/new',
    component: CalculationFormPage,
  },
  {
    path: '/estimate/:id',
    component: Estimate,
  },
];

export default routes;