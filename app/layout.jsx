import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import '@icon/icofont/icofont.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
const Header = dynamic(() => import('@/components/Header/Header'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))

export const metadata = {
  title: "Dr. Mazharullah's Quality Healthcare Services",
  description: "Providing top-notch medical services with experienced professionals. Book your appointment today!",
  keywords: "medical clinic, healthcare, doctor appointment, hospital, patient care, Dr. Mazharullah, Apollo Hospital, Fortis Hospital, AIIMS, Medanta, Manipal Hospital",
  author: "Dr. Mazharullah's Medical Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
      </Head>
      <body className={poppins.className}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
