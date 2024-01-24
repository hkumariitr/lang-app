// src/App.js
import React, { useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import i18n from './components/i18n';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    console.log('triggered');
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
   
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <AppContainer>
        <Navbar/>
          <Routes>
            
            <Route
              path="/"
              element={<HomePage toggleLanguage={toggleLanguage} />}
            />
            <Route
              path="/about"
              element={<AboutPage toggleLanguage={toggleLanguage} />}
            />
          </Routes>
        </AppContainer>
      </Router>
    </I18nextProvider>
  );
};

export default App;
