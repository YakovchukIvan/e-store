import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <main className="bg-gray-200 ">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
