import Header from './components/header/Header';
import Hero from './components/sections/Hero';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <sections>
          <Hero />
        </sections>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
