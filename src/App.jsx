import { useEffect } from 'react';
import preview from './assets/image/preview.png';

export default function App() {
  useEffect(() => {
    const btn = document.querySelector('#downloadBtn');
    btn?.addEventListener('mouseenter', () => {
      btn.classList.add('scale-105');
    });
    btn?.addEventListener('mouseleave', () => {
      btn.classList.remove('scale-105');
    });
    btn?.addEventListener('click', () => {
      // Simulate download
      window.open('https://example.com/avmania.apk', '_blank');
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 animate-pulse drop-shadow-lg mb-6">
        AVMania
      </h1>

      {/* Longer, Catchy Description */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fadeIn leading-relaxed">
        Experience the ultimate adult entertainment with <span className="text-white font-semibold">AVMania</span> — your one-stop
        app for high-quality Japanese AV content, 100% free. No subscriptions, no sign-ups, no buffering — just seamless HD streaming with zero interruptions. Discover thousands of full-length uncensored titles, updated regularly, and available anytime, anywhere. 
      </p>

      {/* Glowing CTA Button */}
      <button
        id="downloadBtn"
        className="glow-button bg-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300"
      >
        🚀 Download APK Now
      </button>

      {/* Preview Image */}
      <img
        src={preview}
        alt="AVMania App Preview"
        className="mt-12 rounded-xl shadow-2xl w-full max-w-md animate-slideIn"
      />

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 animate-fadeIn">
        © 2025 AVMania. No ads. No limits. Just watch.
      </footer>
    </div>
  );
}
