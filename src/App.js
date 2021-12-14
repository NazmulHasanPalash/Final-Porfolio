import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import Projects from './component/Projects/Projects';
import Contacts from './component/Contacts/Contacts';
import Bikers from './component/Bikers/Bikers';
import Travel from './component/Travel/Travel';
import Medical from './component/Medical/Medical';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route exact path="/home">
            <Home></Home>

          </Route>
          <Route exact path="/home#projects">
            <Projects></Projects>

          </Route>
          <Route exact path="/home#contacts">
            <Contacts></Contacts>

          </Route>
          <Route path="/home#about">
            <About></About>

          </Route>
          <Route path="/bike">
            <Bikers></Bikers>

          </Route>
          <Route path="/travel">
            <Travel></Travel>
          </Route>
          <Route path="/medical">
            <Medical></Medical>
          </Route>



          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
