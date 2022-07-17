import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Nav1 from './components/Nav/Nav1';
import Nav2 from './components/Nav/Nav2';
import Homepage from './views/Homepage/Homepage';
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
      <Switch>
        <Route path='/' exact render={(props) => <Homepage {...props} />} />
      </Switch>
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
