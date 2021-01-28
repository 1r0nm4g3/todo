import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="list-header">
          <h1>My List</h1>
          <div className="list-details">
            <div className="list-details--date">Created 27 January 2021</div>
            <div className="list-details--author">By <a href="#">Michael Ingram</a></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
