// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { NavLink, Outlet } from 'react-router-dom';
import MainLayout from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <MainLayout>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </MainLayout>
  );
};

export default Layout;
