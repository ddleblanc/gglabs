import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import './Hero.css';

const FRAME_COUNT = 122; // Total number of frames (updated for lab assets)
const SCROLL_HEIGHT = 5000; // Total scrollable height in pixels (adjusted for shorter sequence)

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
            img.src = `/assets/lab/output_${paddedIndex}.jpg`;
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
                        opacity: useTransform(smoothProgress, [0.65, 0.95], [0, 1])
                    }}
                />

                <div className="text-overlay-container">
                    {/* Phase 1: Intro - GG LABS */}
                    <div className="text-phase phase-1">
                        <motion.img
                            src="/assets/logo2.png"
                            alt="GG LABS Logo"
                            style={{
                                opacity: useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]),
                                y: useTransform(smoothProgress, [0, 0.2], [0, -50]),
                                scale: useTransform(smoothProgress, [0, 0.2], [1, 1.2])
                            }}
                            className="hero-logo w-[60vw] md:w-[30vw] max-w-[500px] object-contain drop-shadow-xl"
                        />
                        <motion.p
                            style={{
                                opacity: useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]),
                                y: useTransform(smoothProgress, [0, 0.2], [0, -30])
                            }}
                            className="hero-role text-center px-4"
                        >
                            BRING YOUR PROJECT TO THE NEXT LEVEL
                        </motion.p>
                    </div>

                    {/* Phase 2: GET GOOD - Utility Token */}
                    <div className="text-phase phase-2 pointer-events-none">
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]),
                                scale: useTransform(smoothProgress, [0.15, 0.35], [0.95, 1])
                            }}
                            className="hero-center-content"
                        >
                            {/* Changed to neon-purple for complementary contrast */}
                            <img
                                src="/assets/getgood.png"
                                alt="GET GOOD"
                                className="w-[80vw] md:w-[50vw] max-w-[800px] object-contain drop-shadow-2xl mb-4"
                            />
                            <p className="hero-description max-w-2xl">
                                GG Labs funds, builds, and scales the next generation of Web3 gaming projects.
                            </p>

                            <div className="hero-actions pointer-events-auto">
                                <button className="hero-btn primary">REQUEST DECK</button>
                                <button className="hero-btn secondary">LEARN MORE</button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 3: SQUAD UP - Partners */}
                    <div className="text-phase phase-3">
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]),
                                y: useTransform(smoothProgress, [0.4, 0.7], [40, -40])
                            }}
                            className="hero-brands-wrapper"
                        >
                            <div className="partners-grid">
                                <span>INCUBATION</span>
                                <span>LAUNCHPAD</span>
                                <span>STAKING</span>
                                <span>GOVERNANCE</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 4: Stats */}
                    <div className="text-phase phase-4 pointer-events-none">
                        <motion.div
                            style={{
                                opacity: useTransform(smoothProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]),
                                y: useTransform(smoothProgress, [0.65, 0.8], [30, 0])
                            }}
                            className="hero-stats-container w-full max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {[
                                { label: "Portfolio Status", value: "1st Project Live" },
                                { label: "Market Growth", value: "$44B by 2034" },
                                { label: "Strategy", value: "Gaming Only" },
                                { label: "Target", value: "High ROI" },
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
                        style={{ opacity: useTransform(smoothProgress, [0.9, 0.95, 1], [0, 1, 1]) }}
                        className="text-phase phase-5"
                    >
                        <h2 className="hero-final-text neon-blue">
                            GAME ON
                        </h2>
                    </motion.div>
                </div>
            </div>

            <motion.div
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                className="scroll-indicator"
            >
                SCROLL TO START
            </motion.div>
        </div>
    );
}
