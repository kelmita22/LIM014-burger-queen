import React from 'react';
import Header from "./Header"

const Layout = ({ children }) => {
  return (<section >
    <Header />
    {children}
  </section>);
}

export default Layout;
