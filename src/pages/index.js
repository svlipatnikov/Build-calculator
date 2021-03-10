import AuthPage from './AuthPage';
import CustomerPage from './CustomerPage';
import Estimate from './Estimate/Estimate';
import CustomersListPage from './CustomersListPage';
import CalculationFormPage from './CalculationFormPage';

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
    path: '/calculation/new',
    component: CalculationFormPage,
  },
  {
    path: '/estimate/:id',
    component: Estimate,
  },
];
export default routes;
