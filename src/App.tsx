import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Heart, Download, Instagram, Twitter, Send, MessageCircle } from 'lucide-react';
import { toPng } from 'html-to-image';
import { generateLetter } from './utils/letterGenerator';

type LetterStyle = 'romantic' | 'shakespeare' | 'cringe' | 'secret';
type RelationType = 'crush' | 'partner' | 'bestfriend';
type Page = 'landing' | 'form' | 'letter';

function App() {
  const [page, setPage] = useState<Page>('landing');
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState<RelationType>('crush');
  const [style, setStyle] = useState<LetterStyle>('romantic');
  const [letter, setLetter] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (page === 'landing') {
      const timer = setTimeout(() => {
        setPage('form');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [page]);

  const handleGenerate = () => {
    const generatedLetter = generateLetter(name, relationship, style);
    setLetter(generatedLetter);
    setPage('letter');
    setShowHearts(true);
  };

  const handleDownload = useCallback(() => {
    if (letterRef.current === null) return;

    toPng(letterRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'love-letter.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error downloading image:', err);
      });
  }, [letterRef]);

  if (page === 'landing') {
    return (
      <div className="min-h-screen romantic-bg flex items-center justify-center overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="text-center relative z-10">
          <div className="relative">
            <Heart 
              size={60} 
              className="text-rose-600 animate-pulse absolute -top-16 left-1/2 transform -translate-x-1/2" 
              fill="currentColor"
            />
            <h1 className="text-6xl font-serif text-rose-600 animate-title-reveal overflow-hidden">
              HeartScript
            </h1>
            <p className="text-rose-500/80 mt-4 animate-subtitle-reveal">
              Express your love, beautifully
            </p>
          </div>
        </div>
        <FloatingHeartsLanding />
      </div>
    );
  }

  if (page === 'letter') {
    return (
      <div className="min-h-screen romantic-bg flex items-center justify-center p-8 relative">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        {showHearts && <FloatingHearts />}
        <div className="max-w-2xl w-full fade-in-scale relative z-10">
          <div ref={letterRef} className="paper-texture rounded-lg p-12 relative transform rotate-1">
            <div className="relative letter-content">
              <h2 className="text-4xl font-serif mb-8 text-center text-rose-800 font-bold">For You</h2>
              <p className="whitespace-pre-line text-xl leading-relaxed mb-8 text-gray-800 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                {letter}
              </p>
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-300">
                <div className="flex space-x-6">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("I just created a love letter with Heartscript! 💌\n\n" + letter)}`} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-800 hover:text-rose-600 transition-all transform hover:scale-110">
                    <Twitter size={28} />
                  </a>
                  <a href={`https://www.instagram.com/create/story?text=${encodeURIComponent(letter)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-800 hover:text-rose-600 transition-all transform hover:scale-110">
                    <Instagram size={28} />
                  </a>
                  <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(letter)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-800 hover:text-rose-600 transition-all transform hover:scale-110">
                    <Send size={28} />
                  </a>
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(letter)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-800 hover:text-rose-600 transition-all transform hover:scale-110">
                    <MessageCircle size={28} />
                  </a>
                </div>
                <button
                  onClick={handleDownload}
                  className="text-gray-800 hover:text-rose-600 transition-all transform hover:scale-110"
                  title="Download as image"
                >
                  <Download size={28} />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setPage('form')}
            className="mt-8 w-full bg-rose-600 text-white py-4 px-8 rounded-lg hover:bg-rose-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
          >
            <Heart size={24} />
            <span className="text-lg font-semibold">Generate New Letter</span>
          </button>
          <div className="text-center mt-4">
            <span className="watermark">created by: meghx</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen romantic-bg flex items-center justify-center p-4 relative">
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <FloatingHeartsForm />
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform fade-in-scale relative z-10">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center">
            <Heart size={40} className="text-rose-600 animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-4xl font-serif text-rose-600 mt-4">HeartScript</h1>
          <p className="text-rose-600/80 text-sm">Express your love, beautifully</p>
        </div>
        <div className="space-y-6">
          <div className="transform transition-all hover:scale-105">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient's Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
              placeholder="Enter name..."
            />
          </div>

          <div className="transform transition-all hover:scale-105">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationship Type
            </label>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value as RelationType)}
              className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
            >
              <option value="crush">Crush</option>
              <option value="partner">Partner</option>
              <option value="bestfriend">Best Friend</option>
            </select>
          </div>

          <div className="transform transition-all hover:scale-105">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Letter Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value as LetterStyle)}
              className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
            >
              <option value="romantic">Romantic</option>
              <option value="shakespeare">Shakespeare Mode</option>
              <option value="cringe">Cringe Mode</option>
              <option value="secret">Secret Admirer</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-rose-600 text-white py-4 px-8 rounded-lg hover:bg-rose-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg mt-8 group"
          >
            <Heart size={24} className="group-hover:animate-ping" />
            <span className="text-lg font-semibold">Generate Love Letter</span>
          </button>
        </div>
        <div className="text-center mt-8">
          <span className="watermark">created by: meghx</span>
        </div>
      </div>
    </div>
  );
}

function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => {
        const animationType = Math.random() > 0.5 ? 'heart-float' : 'heart-pop';
        const size = 20 + Math.random() * 20;
        const delay = Math.random() * 4;
        const duration = 3 + Math.random() * 2;
        
        return (
          <div
            key={i}
            className={`absolute ${animationType}`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: animationType === 'heart-float' ? '-20px' : `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Heart
              size={size}
              className="text-rose-500"
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(244, 63, 94, 0.4))',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function FloatingHeartsForm() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const size = 15 + Math.random() * 15;
        const delay = Math.random() * 4;
        const duration = 3 + Math.random() * 2;
        
        return (
          <div
            key={i}
            className="absolute heart-side-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Heart
              size={size}
              className="text-rose-400/50"
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(244, 63, 94, 0.2))',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function FloatingHeartsLanding() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const size = 15 + Math.random() * 15;
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 1;
        
        return (
          <div
            key={i}
            className="absolute heart-landing"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <Heart
              size={size}
              className="text-rose-400"
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(244, 63, 94, 0.3))',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;