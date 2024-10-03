import '@/styles/globals.css';
import Layout from '@/components/layout/layout';
import { CartProvider } from '@/components/context/cart/cart';
import { AuthProvider } from '@/components/context/auth/auth';

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
