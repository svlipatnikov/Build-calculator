import Auth from './Auth';
import CustomerPage from './CustomerPage';
import Estimate from './Estimate/Estimate';
import CalculationFormPage from './CalculationFormPage';

const routes = [
    {
        path: '/',
        component: Auth,
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
