import './App.css';
import Header from './components/widgets/Header';
import React from 'react';
import Home from './components/pages/Home';
import Footer from './components/widgets/Footer';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';




function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
