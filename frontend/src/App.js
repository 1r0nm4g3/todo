import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import List from './pages/List'
import About from './pages/About'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
  return (
    <Router>
    <div className="App">
      <div></div>
      <Header />
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/about' component={About} />
        <Route exact path='/terms' component={Terms} /> 
        <Route exact path='/privacy' component={Privacy} /> 
        <Route exact path='/login' component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
