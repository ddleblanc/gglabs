import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import './Hero.css';

const FRAME_COUNT = 244; // Total number of frames (updated for gaming assets)
const SCROLL_HEIGHT = 16000; // Total scrollable height in pixels (increased for longer sequence)

export default function Hero() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [framesLoaded, setFramesLoaded] = useState(0);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);



    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Pad with 4 zeros based on file list: output_0001.jpg
            const paddedIndex = i.toString().padStart(4, '0');
            img.src = `/assets/gaming/output_${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                setFramesLoaded(loadedCount);
            };
            img.onerror = (e) => {
                console.error(`Failed to load image ${paddedIndex}.jpg`, e);
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Render to canvas
    useEffect(() => {
        let animationFrameId;

        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
            if (!ctx) return;

            // Current frame to draw
            const currentFrame = Math.round(frameIndex.get());
            const img = images[currentFrame];

            if (img && img.complete && img.naturalWidth > 0) {
                // High DPI support
                const dpr = window.devicePixelRatio || 1;

                // Only Resize if strictly necessary to avoid thrashing
                if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
                    canvas.width = window.innerWidth * dpr;
                    canvas.height = window.innerHeight * dpr;
                    ctx.scale(dpr, dpr);
                }

                // "object-fit: cover" logic
                const canvasRatio = window.innerWidth / window.innerHeight;
                const imgRatio = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasRatio > imgRatio) {
                    // Canvas is wider than image
                    drawWidth = window.innerWidth;
                    drawHeight = window.innerWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                } else {
                    // Canvas is taller than image
                    drawWidth = window.innerHeight * imgRatio;
                    drawHeight = window.innerHeight;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                    offsetY = 0;
                }

                // Draw
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        // Start render loop
        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [images, frameIndex]);

    const isLoading = framesLoaded < FRAME_COUNT; // Strict loading
    // Or maybe start showing as soon as we have enough? 
    // For safety, let's wait for at least first 10 frames or so, but 'isLoading' is safest for "Premium" feel (no glitches).

    return (
        <div
            ref={containerRef}
            className="hero-container"
            style={{ height: `${SCROLL_HEIGHT}px` }}
        >
            <div className="sticky-wrapper">
                <canvas
                    ref={canvasRef}
                    className="hero-canvas"
                />

                {isLoading && (
                    <div className="loading-overlay">
                        <span className="loading-text">INITIALIZING... ({Math.round(framesLoaded / FRAME_COUNT * 100)}%)</span>
                    </div>
                )}

                {/* Fade to Black Overlay (Last 2 Sections) */}
                <motion.div
                    className="fade-overlay"
                    style={{
                        opacity: useTransform(scrollYProgress, [0.65, 0.95], [0, 1])
                    }}
                />

                <div className="text-overlay-container">
                    {/* Phase 1: Intro - GG LABS */}
                    <div className="text-phase phase-1">
                        <motion.img
                            src="/assets/logo.png"
                            alt="GG LABS Logo"
                            style={{
                                opacity: useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]),
                                y: useTransform(scrollYProgress, [0, 0.2], [0, -50]),
                                scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.2])
                            }}
                            className="hero-logo w-[60vw] md:w-[30vw] max-w-[500px] object-contain drop-shadow-xl"
                        />
                        <motion.p
                            style={{
                                opacity: useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]),
                                y: useTransform(scrollYProgress, [0, 0.2], [0, -30])
                            }}
                            className="hero-role"
                        >
                            LEVEL UP YOUR GAME
                        </motion.p>
                    </div>

                    {/* Phase 2: GET GOOD - Utility Token */}
                    <div className="text-phase phase-2 pointer-events-none">
                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]),
                                scale: useTransform(scrollYProgress, [0.15, 0.35], [0.95, 1])
                            }}
                            className="hero-center-content"
                        >
                            {/* Changed to neon-purple for complementary contrast */}
                            <h2 className="hero-stat-number">GET GOOD</h2>
                            <p className="hero-description">GG IS THE UTILITY TOKEN OF THE GG LABS PLATFORM</p>

                            <div className="hero-actions pointer-events-auto">
                                <button className="hero-btn primary">WHITEPAPER</button>
                                <button className="hero-btn secondary">BUY GG</button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 3: SQUAD UP - Partners */}
                    <div className="text-phase phase-3">
                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]),
                                y: useTransform(scrollYProgress, [0.4, 0.7], [40, -40])
                            }}
                            className="hero-brands-wrapper"
                        >
                            <h2 className="hero-section-title">PARTY UP WITH</h2>
                            <div className="partners-grid">
                                <span>BINANCE</span>
                                <span>POLYGON</span>
                                <span>IMMUTABLE</span>
                                <span>EPIC GAMES</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 4: Stats */}
                    <div className="text-phase phase-4 pointer-events-none">
                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]),
                                y: useTransform(scrollYProgress, [0.65, 0.8], [30, 0])
                            }}
                            className="hero-stats-container w-full max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {[
                                { label: "Projects Incubated", value: "25+" },
                                { label: "Total Raised", value: "$40M+" },
                                { label: "Community", value: "250K+" },
                                { label: "Market Cap", value: "$120M" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:text-accent transition-colors duration-300">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-white/70 mt-2 group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Phase 5: Final Call */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]) }}
                        className="text-phase phase-5"
                    >
                        <h2 className="hero-final-text neon-blue">
                            GAME ON
                        </h2>
                    </motion.div>
                </div>
            </div>

            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                className="scroll-indicator"
            >
                SCROLL TO START
            </motion.div>
        </div>
    );
}
