import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import ValueFlow from './components/ValueFlow';
import Ecosystem from './components/Ecosystem'; // Renamed to Portfolio on UI
import Services from './components/Services';
import Membership from './components/Membership';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <main className="w-full bg-bg text-text selection:bg-accent selection:text-black">
            <Hero />
            <Opportunity />
            <ValueFlow />
            <Ecosystem />
            <Services />
            <Membership />
            <Tokenomics />
            <Team />
            <CTA />
            <Footer />
        </main>
    );
}

export default App;
