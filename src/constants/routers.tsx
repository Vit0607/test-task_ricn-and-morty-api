import App from '@/App.tsx';
import HomePage from 'pages/HomePage/HomePage';
import CharacterDetails from 'pages/CharacterDetails/CharacterDetails';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { createBrowserRouter } from 'react-router';
import { LINKS } from 'types/enums';

const router = createBrowserRouter([
  {
    path: LINKS.Home,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: LINKS.Character,
        element: <CharacterDetails />
      },
      {
        path: LINKS.Favorites,
        element: <FavoritesPage />
      }
    ]
  }
]);

export default router;
