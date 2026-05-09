import type { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="site-wrap">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
