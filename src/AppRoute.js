import { useRoutes } from 'react-router-dom';
import routes from './routes'; 
import adminRoutes from './adminRoutes'; 
import merchantRoutes from './merchantRoutes'; 
import memberRoutes from './memberRoutes'; 


function AppRoutes() {
  const element = useRoutes([...adminRoutes,...merchantRoutes,...memberRoutes]);
  return element;
}

export default AppRoutes;
 