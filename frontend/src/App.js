import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ListHeader from './components/list/ListHeader'
import ListItems from './components/list/ListItems'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ListHeader />
        <ListItems />
      </main>
      <Footer />
    </div>
  );
}

export default App;
