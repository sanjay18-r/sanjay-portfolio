import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navabr.jsx';
import ThreeScene from './three/ThreeScene.jsx';

function App() {
  return (
    <div className="min-h-screen bg-primary-dark text-secondary-light font-sans">
      <Navbar />
      <main className="relative z-10 p-4 md:p-8 pt-16">
        {/* ThreeScene will be the background */}
        <div className="fixed inset-0 z-0 opacity-10">
            <ThreeScene />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <section id="home" className="min-h-screen flex items-center">
            <Hero />
          </section>
          
          <section id="about" className="py-20 md:py-32">
            <About />
          </section>
          
          <section id="projects" className="py-20 md:py-32">
            <Projects />
          </section>
          
          <section id="contact" className="py-20 md:py-32">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;