import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
