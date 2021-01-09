import './App.css';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            <Navbar />
            <Home />
            <Footer />
    </div>
  );
}

export default App;
