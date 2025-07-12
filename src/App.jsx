import preview from './assets/image/preview.png';
import sinevista from './assets/image/sinevista.png';

export default function App() {
  // React onClick handlers
  const handleAvmaniaDownload = () => {
    window.open(
      'https://github.com/ghie29/AVMLanding/releases/download/v1.0.1/avmania.apk',
      '_blank'
    );
  };

  const handleSinevistaDownload = () => {
    window.open(
      'https://github.com/ghie29/redjuso/releases/download/v1.0.0/SineVista.v1.0.1.apk',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-6 py-12 text-center overflow-hidden flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 animate-pulse drop-shadow-lg mb-4">
        Top Free Streaming APKs
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        Download AVMania & SineVista — No Sign-Up, No Ads, Just Watch
      </p>

      {/* Two App Cards in a Row */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl items-start justify-center text-left">
        {/* AVMania */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <img
            src={preview}
            alt="AVMania Preview"
            className="rounded-xl shadow-2xl w-full h-[400px] object-cover mb-6 transition-transform duration-300 hover:scale-105"
          />
          <button
            type="button"
            onClick={handleAvmaniaDownload}
            className="glow-button bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300 mb-6"
          >
            🚀 Download AVMania APK
          </button>
          <p className="text-lg text-gray-300 leading-relaxed min-h-[120px]">
            <span className="text-white font-semibold">AVMania</span> brings you unlimited, uncensored Japanese AV streaming for free. No buffering, no sign-ups — just pure HD entertainment anytime.
          </p>
        </div>

        {/* SineVista */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <img
            src={sinevista}
            alt="SineVista Preview"
            className="rounded-xl shadow-2xl w-full h-[400px] object-cover mb-6 transition-transform duration-300 hover:scale-105"
          />
          <button
            type="button"
            onClick={handleSinevistaDownload}
            className="glow-button bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300 mb-6"
          >
            🎬 Download SineVista APK
          </button>
          <p className="text-lg text-gray-300 leading-relaxed min-h-[120px]">
            <span className="text-white font-semibold">SineVista</span> lets you stream movies online for free — no subscription, no ads, no hassle. Enjoy blockbuster hits and indie gems at your fingertips.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 animate-fadeIn">
        © 2025 AVMania & SineVista. No ads. No limits. Just watch.
      </footer>
    </div>
  );
}
