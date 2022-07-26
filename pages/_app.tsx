import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/use-auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* Higher Order Component */
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
