import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import React from "react";

test('renders learn react link', () => {
 render(
     <Router>
      <AuthContextProvider>
       <App/>
      </AuthContextProvider>
     </Router>
     );
  const linkElement = screen.getByText(/footyscore/i);
  expect(linkElement).toBeInTheDocument();
});
