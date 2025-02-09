import { Outlet } from 'react-router';
import './App.scss';
import FavoritesLink from 'components/common/FavoritesLink/FavoritesLink';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <FavoritesLink />
      <Outlet />
    </>
  );
};

export default App;
