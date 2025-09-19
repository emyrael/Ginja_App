import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${poppins.className}`}>
      <style jsx global>{`
        .ginja-font {
          font-family: ${poppins.style.fontFamily}, 'Poppins', 'Montserrat', sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}