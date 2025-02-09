// src/app/layout.tsx
"use client"; // Add this directive at the top

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Adjust the path as necessary
import "../app/styles/globals.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;