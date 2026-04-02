import React, { useState, FC } from 'react';
import { ChevronRight, Bluetooth, Palette } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

interface NavLink {
  label: string;
  href: string;
}

function Keyboard(props: any) {
  const { scene } = useGLTF('/keyboard.glb') as any

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  )
}

const KeyboardLanding: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks: NavLink[] = [
    { label: 'Store', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Machined', href: '#' },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-tight">Pure Object</div>
          
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link: NavLink) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`text-sm ${
                  link.label === 'Store' 
                    ? 'font-medium hover:text-gray-600' 
                    : 'text-gray-600 hover:text-black'
                } transition`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button 
            className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            onClick={() => console.log('Pre-order clicked')}
          >
            Pre-order
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 p-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Pure Object.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            A masterpiece of tactile precision and minimalist design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              className="bg-black text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
              onClick={() => console.log('Pre-order now clicked')}
            >
              Pre-order Now
            </button>
            <a 
              href="#" 
              className="text-black font-medium flex items-center gap-2 hover:text-gray-600 transition w-full sm:w-auto justify-center"
            >
              Learn more <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero Image */}
<div className="mt-24 w-full max-w-6xl mx-auto h-[500px]">
  <Canvas 
  camera={{ position: [0, 0.8, 2.8], fov: 50 }}
  dpr={[1, 2]}
  gl={{ antialias: true, alpha: true }}
>
  <ambientLight intensity={0.6} />
  <directionalLight 
    position={[5, 8, 5]} 
    intensity={1.2}
    castShadow
    shadow-mapSize={[2048, 2048]}
  />
  <pointLight position={[-5, 3, -5]} intensity={0.4} color="#8899ff" />

  <Keyboard 
    scale={0.6}
    position={[0, 0, 0]}
    rotation={[Math.PI / 6, 0, 0]}
    castShadow
    receiveShadow
  />
  <OrbitControls />
</Canvas>
</div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-24">
        {/* Feature 1: Tactile Purity */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 bg-gray-50 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-8xl">🔧</div>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Tactile Purity.</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Every keystroke is engineered for zero-latency feedback. A physical connection between thought and execution, rendered in solid aluminum and PBT.
            </p>
          </div>
        </div>

        {/* Feature 2: Full Width Architectural Design */}
        <div className="bg-black rounded-3xl py-32 px-12 text-center text-white">
          <span className="text-white/60 uppercase tracking-widest text-xs font-bold mb-8 block">
            Architectural Design
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Machined from a single block of aerospace-grade alloy.
          </h2>
          <div className="mt-16 w-full max-w-3xl mx-auto bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-6xl">🏭</div>
          </div>
        </div>

        {/* Bento Grid */}
        <BentoGrid />
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* CTA Section */}
      <section className="py-48 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Bring the Object home.
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-light">
          Limited batch production. Shipping globally starting December 2024.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            className="bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
            onClick={() => console.log('Pre-order for $299 clicked')}
          >
            Pre-order for $299
          </button>
        </div>
        <p className="mt-8 text-gray-600/60 text-sm italic">
          Includes custom braided cable and premium carry case.
        </p>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

// Bento Grid Component
const BentoGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Large Card 1: 60% Refined */}
      <div className="md:col-span-2 bg-gray-50 p-12 rounded-2xl flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-4">60% Refined.</h3>
          <p className="text-gray-600 max-w-sm">
            The perfect balance of space and utility. Reclaimed desk real estate for the focused mind.
          </p>
        </div>
        <div className="mt-12 bg-gray-200 rounded-xl h-48 flex items-center justify-center">
          <div className="text-6xl">📦</div>
        </div>
      </div>

      {/* Small Card 1: Zero Delay */}
      <div className="bg-gray-100 p-12 rounded-2xl flex flex-col items-center text-center justify-center">
        <Bluetooth size={40} className="mb-6 text-gray-800" />
        <h3 className="text-2xl font-bold mb-2">Zero Delay.</h3>
        <p className="text-gray-600 text-sm font-light">
          Proprietary 2.4GHz wireless tech for a clean, cable-free sanctuary.
        </p>
      </div>

      {/* Small Card 2: Lunar White */}
      <div className="bg-white border border-gray-200 p-12 rounded-2xl flex flex-col justify-between">
        <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Palette size={24} className="text-black" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Lunar White.</h3>
          <p className="text-gray-600 text-sm font-light">
            Finished with a signature ceramic coating that resists aging and fingerprints.
          </p>
        </div>
      </div>

      {/* Large Card 2: The Touch of PBT */}
      <div className="md:col-span-2 bg-gray-50 rounded-2xl overflow-hidden relative h-80 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative p-12 text-white">
          <h3 className="text-3xl font-bold">The Touch of PBT.</h3>
        </div>
      </div>
    </div>
  );
};

// Gallery Section Component
const GallerySection: FC = () => {
  interface GalleryItem {
    id: number;
    emoji: string;
  }

  const items: GalleryItem[] = [
    { id: 1, emoji: '🎹' },
    { id: 2, emoji: '⌨️' },
    { id: 3, emoji: '🖥️' },
  ];

  return (
    <section className="bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Elegance in Detail.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item: GalleryItem) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl aspect-square flex items-center justify-center border border-gray-200 hover:border-gray-300 transition"
            >
              <div className="text-6xl">{item.emoji}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const FooterSection: FC = () => {
  interface FooterLink {
    label: string;
    href: string;
  }

  const footerLinks: FooterLink[] = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Sales Policy', href: '#' },
    { label: 'Legal', href: '#' },
  ];

  return (
    <footer className="border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-gray-600 tracking-wide">
          © 2024 Pure Object Inc. All rights reserved.
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link: FooterLink) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-xs text-gray-600 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default KeyboardLanding;