import Header from './Header';
import Footer from './Footer';
import InterstitialAd from './InterstitialAd';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <InterstitialAd />
    </>
  );
}
