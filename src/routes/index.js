import AuthPage from '../pages/AuthPage';
import CustomerPage from '../pages/CustomerPage';
import CalculationResult from '../pages/CalculationResult';
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
    path: '/customers/:customerId',
    component: CustomerPage,
  },
  {
    path: '/customers/:customerId/calculation/new',
    component: CalculationFormPage,
  },
  {
    path: '/customers/:customerId/calculation_edit/:calcId',
    component: CalculationEditForm,
  },
  {
    path: '/customers/:customerId/calculation_result/:calcId',
    component: CalculationResult,
  },
];

export default routes;
