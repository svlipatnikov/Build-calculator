import AuthPage from '../pages/AuthPage';
import CustomerPage from '../pages/CustomerPage';
import Estimate from '../pages/Estimate';
import CustomersListPage from '../pages/CustomersListPage';
import CalculationFormPage from '../pages/CalculationFormPage';
import CalculationEditForm from '../pages/CalculationEditForm';

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
    path: '/calculation/new',
    component: CalculationFormPage,
  },
  {
    path: '/customers/:id',
    component: CustomerPage,
  },
  {
    path: '/calculationedit/:id',
    component: CalculationEditForm,
  },
  {
    path: '/estimate/:id',
    component: Estimate,
  },
];

export default routes;
