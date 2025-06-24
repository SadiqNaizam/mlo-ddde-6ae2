import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ParallaxHeroSection: React.FC = () => {
  console.log('ParallaxHeroSection loaded');
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={targetRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop"
          alt="A top-down view of a delicious gourmet meal"
          className="object-cover w-full h-full brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-foreground px-4"
      >
        <h1 className="text-5xl font-extrabold tracking-tight font-heading sm:text-6xl md:text-7xl lg:text-8xl">
          Experience Culinary Innovation
        </h1>
        <p className="max-w-2xl mt-6 text-lg text-muted-foreground md:text-xl">
          A new era of dining, where premium ingredients and modern techniques are delivered right to your door.
        </p>
        <Button asChild size="lg" className="mt-8 text-base font-bold group">
          <Link to="/menupage">
            View The Menu
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ParallaxHeroSection;