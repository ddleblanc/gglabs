import Hero from './components/Hero';
import Stats from './components/Stats';
import Ecosystem from './components/Ecosystem';
import Features from './components/Features';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
    return (
        <main className="w-full bg-bg text-text selection:bg-accent selection:text-black">
            <Hero />
            <Stats />
            <Features />
            <Ecosystem />
            <Partners />
            <Footer />
        </main>
    );
}

export default App;
