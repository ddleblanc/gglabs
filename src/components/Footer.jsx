export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 font-display">GG LABS</h2>
                        <p className="text-text-dim max-w-sm">
                            Incubating the future of decentralized gaming. We build, launch, and scale the best web3 games.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Platform</h4>
                        <ul className="space-y-2 text-sm text-text-dim">
                            <li><a href="#" className="hover:text-accent transition-colors">Launchpad</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Staking</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Governance</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Apply for Incubation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Connect</h4>
                        <ul className="space-y-2 text-sm text-text-dim">
                            <li><a href="#" className="hover:text-accent transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Telegram</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Medium</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-text-dim">
                    <p>&copy; 2026 GG LABS. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
