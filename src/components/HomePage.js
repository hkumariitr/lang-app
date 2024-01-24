// src/components/HomePage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HomePage = ({ toggleLanguage }) => {
  const { t } = useTranslation();

 

  return (
    <Container>
      <h1>{t('welcome')}</h1>
      <p>{t('homeContent')}</p>
      <Button onClick={toggleLanguage}>{t('changeLanguage')}</Button>
    </Container>
  );
};

export default HomePage;
