import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header.js'; 
import Footer from './Components/Footer';
import data from './Utility/ConstUtility.json';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [tabState, setTabState] = useState(data.HOME_STATE);
  const [productKey, setProductKey] = useState(0);

  function renderContent(tabState) {
    switch (tabState) {
      case data.HOME_STATE:
        return <Home setProduct={setProductKey}/>;
      case data.ABOUT_STATE:
        return <About contactUs={()=>setTabState(data.CONTACT_STATE)} />;
      case data.CONTACT_STATE:
        return <Contact aboutUs={()=>setTabState(data.ABOUT_STATE)} />
      case data.PRODUCT_STATE:
        return <Product productKey={productKey} setTabState={setTabState} setProduct={setProductKey} />;
      default:
        return <h1>Home</h1>;
    }
  }
  useEffect(() => {
    if(productKey && productKey !== 0){
      setTabState(data.PRODUCT_STATE);
    } 
  }, [productKey]);
  return (
    <>
      <Header tabState={tabState} setTabState={setTabState} />
      <div className="headerGap"></div>
      { renderContent(tabState) }
      <Footer />
    </>
  );
}

export default App;
