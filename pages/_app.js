import '@/styles/globals.css';
import Layout from '@/components/layout/layout';
import { CartProvider } from '@/components/context/cart/cart';

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default App;
