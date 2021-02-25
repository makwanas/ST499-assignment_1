
import './styling/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Workspace from './components/Workspace';

//Main App 
function App() {
  return (
    <div className="App">
      <Header />
      <Workspace />
      <Footer />
    </div>
  );
}

export default App;
