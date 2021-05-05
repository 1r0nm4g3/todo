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
import Lists from './pages/Lists'
import UserState from './contexts/user/UserState'
import ListState from './contexts/list/ListState'

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').then(
    (reg) => console.log('Service Worker Registered', reg)
  ).catch(
    (err) => console.log('Service Worker not registered', err)
  )
}

function App() {
  return (
    <UserState>
      <ListState>
        <Router>
        <div className="App">
          <div></div>
          <Header />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/list/:list' component={List} />
            <Route path='/lists' component={Lists} />
            <Route exact path='/about' component={About} />
            <Route exact path='/terms' component={Terms} /> 
            <Route exact path='/privacy' component={Privacy} /> 
            <Route exact path='/login' component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
        </Router>
      </ListState>
    </UserState>
  );
}

export default App;
