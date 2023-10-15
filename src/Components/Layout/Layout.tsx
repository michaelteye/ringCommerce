import * as React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';

export const Layout:React.FC =({ children }:any)=>{
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
