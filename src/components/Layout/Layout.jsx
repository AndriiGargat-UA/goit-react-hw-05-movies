// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';
import { MainLayout, MainMenu, NavBar, BarLink } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <MainLayout>
      <MainMenu>
        <NavBar>
          <li>
            <BarLink to="/">Home</BarLink>
          </li>
          <li>
            <BarLink to="/movies">Movies</BarLink>
          </li>
        </NavBar>
      </MainMenu>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </MainLayout>
  );
};

export default Layout;
