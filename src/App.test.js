import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import CountryContextProvider from "./contexts/CountryContext";
import React from "react";

test('renders learn react link', () => {
 render(
     <Router>
      <AuthContextProvider>
          <CountryContextProvider>
              <App/>
          </CountryContextProvider>
      </AuthContextProvider>
     </Router>
     );
  const linkElement = screen.getByText(/i.koffeman@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
