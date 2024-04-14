import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const token = localStorage.getItem('token');
  return useRoutes(token ? [...MainRoutes] : [AuthenticationRoutes]);
}
