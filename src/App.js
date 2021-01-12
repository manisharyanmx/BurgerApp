import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import './App.css';

function App() {
   

  return (
    
    <div className="App">
      <Layout className="App-Card">
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
