import * as React from 'react';
import { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
