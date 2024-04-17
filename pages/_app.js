import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;