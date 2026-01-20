import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
    const ref = useRef(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for rotation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
        stiffness: 150,
        damping: 20,
    });

    // Glare effect opacity/position
    const glareOpacity = useTransform(y, [-0.5, 0.5], [0, 0.4]);
    const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    function handleMouseMove(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full"
            >
                {/* Content */}
                {children}

                {/* Glare Effect */}
                <motion.div
                    style={{
                        opacity: glareOpacity,
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                    }}
                    className="absolute inset-0 pointer-events-none rounded-[inherit] z-50 mix-blend-overlay"
                />
            </motion.div>
        </motion.div>
    );
}
