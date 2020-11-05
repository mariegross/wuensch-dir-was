import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddButton from './components/AddButton';
import WishlistItem from './components/WishlistItem';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Add from './pages/Add';
import Details from './pages/Details';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:listId">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* <GlobalStyle />
      <Wrapper>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </Wrapper> */}
    </>
  );
}

export default App;
