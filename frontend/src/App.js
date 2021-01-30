import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import List from './pages/List'
import About from './pages/About'

function App() {
  return (
    <Router>

    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={List} />
          <Route exact path='/about' component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
