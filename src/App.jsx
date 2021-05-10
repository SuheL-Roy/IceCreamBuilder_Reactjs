import React from 'react';
import './index.css';
import Layout from './components/Layout/Layout.jsx';
import Header from './components/header/Header.jsx';
import Body from './components/Body/Body.jsx';
import Footer  from './components/Footer/Footer.jsx'; 
const App = () => {
  return (
    <Layout>
      <Header/>
      <Body/>
      <Footer/>
    </Layout>

  );
}

export default App;
