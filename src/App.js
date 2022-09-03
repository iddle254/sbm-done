import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Nav1 from './components/Nav/Nav1';
import Nav2 from './components/Nav/Nav2';
import Apps from './views/Homepage/Apps';
import Banner from './views/Homepage/Banner';
import BusinessSolutions from './views/Homepage/BusinessSolutions';
import EliteBanking from './views/Homepage/EliteBanking';
import LoanCalculator from './views/Homepage/LoanCalculator';
import Solutions from './views/Homepage/Solutions';
import Ticker from './views/Homepage/Ticker';
import Tools from './views/Homepage/Tools';
import Splashscreen from './views/Splashscreen';

function App() {
  return (
    <div className='App'>
      {/* <Splashscreen /> */}
      <Nav1 />
      <Nav2 />
      <Banner />
      <Ticker />
      <Solutions />
      <BusinessSolutions />
      <EliteBanking />
      <LoanCalculator />
      <Tools />
      <Apps />
      <Footer />
    </div>
  );
}

export default App;
