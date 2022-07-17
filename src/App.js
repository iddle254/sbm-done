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
// import Homepage from './views/Homepage/Homepage';
// import Banner from './Banner';
// import Ticker from './Ticker';
// import Solutions from './Solutions';
// import BusinessSolutions from './BusinessSolutions';
// import EliteBanking from './EliteBanking';
// import LoanCalculator from './LoanCalculator';
// import Tools from './Tools';
// import Apps from './Apps';
import Splashscreen from './views/Splashscreen';

function App() {
  return (
    <div className='App'>
      {/* <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        </Switch> */}
      <Splashscreen />
      <Nav1 />
      <Nav2 />
      {/* <Switch>
        <Route path='/' exact render={(props) => <Homepage {...props} />} />
      </Switch> */}
      <Banner />
      <Ticker />
      <Solutions />
      <BusinessSolutions />
      <EliteBanking />
      <LoanCalculator />
      <Tools />
      <Apps />
      <Footer />
      {/* 
      Nav1
       Nav2
       Banner
       ForexSlider
       SolutionsForYou
       SolutionsForBusiness
       EliteBanking
       Loan
       BankingTools
       CallToAction
       Footer
       */}
    </div>
  );
}

export default App;
