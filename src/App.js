import './App.css';
import LandingPage from './components/pages/landingPage';
import Service from './components/pages/service';
import Features from './components/pages/feature';
import About from './components/pages/about';
import Footer from './components/pages/footer';

function App() {
  return (
    <div>
      <LandingPage />
      <Service />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
