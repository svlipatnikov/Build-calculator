import Auth from './Auth';
import CustomerPage from './CustomerPage';
import Estimate from './Estimate/Estimate';

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
        path: '/estimate/:id',
        component: Estimate,
    },
];

export default routes;
