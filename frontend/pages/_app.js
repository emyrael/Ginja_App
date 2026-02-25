import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${poppins.className} bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}