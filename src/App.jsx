import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Paintings from "./components/Paintings.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Paintings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
