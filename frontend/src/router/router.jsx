import { createBrowserRouter } from 'react-router-dom'
import { Contacts } from '../pages/Contacts';
import { Profile } from '../pages/Profile/Profile';
import { Main } from '../pages/Main';
import { About } from '../pages/About';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
