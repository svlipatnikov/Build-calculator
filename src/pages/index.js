import Auth from './Auth';
import Clients from './Clients';
import Estimate from './Estimate/Estimate';

const routes = [
  {
    path: '/',
    component: Auth
  },
  {
    path: '/clients',
    component: Clients
  },
  {
    path: '/estimate/:id',
    component: Estimate
  },
]

export default routes