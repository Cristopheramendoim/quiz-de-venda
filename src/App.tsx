import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

export default function App() {
  const [showCookies, setShowCookies] = useState(true);
  const affiliateLink = "https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm#aff=cristhophersem";
  
  useEffect(() => {
    // Intercepta TODOS os cliques na página para redirecionar para o link de afiliado
    const handleGlobalClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      try {
        if (window.top && window.top !== window.self) {
           window.top.location.href = affiliateLink;
        } else {
           window.location.href = affiliateLink;
        }
      } catch (err) {
        window.location.href = affiliateLink;
      }
    };

    // Adiciona o listener na fase de captura (capture: true) para garantir que seja o primeiro a rodar
    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Overlay for blurring the background */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999998] backdrop-blur-md bg-black/30"
          />
        )}
      </AnimatePresence>

      {/* Banner de Cookies */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[999999] bg-[#0b132b] text-white p-5 md:p-4 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] border-t-[3px] border-[#b37022]"
          >
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-2/3">
                <Cookie className="text-[#b37022] flex-shrink-0" style={{ width: '40px', height: '40px', minWidth: '40px' }} />
                <p className="text-lg md:text-sm text-slate-300 text-center sm:text-left leading-relaxed font-medium md:font-normal">
                  We use cookies to improve your experience on our site, personalize content and ads, provide social media features, and analyze our traffic.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 w-full md:w-1/3">
                <button 
                  className="w-full px-4 py-3.5 md:py-2.5 rounded-lg md:rounded bg-transparent border-2 border-slate-500 hover:bg-slate-800 text-slate-300 transition-colors font-bold text-lg md:text-sm whitespace-nowrap"
                  // O clique aqui será interceptado pelo handleGlobalClick
                >
                  Reject
                </button>
                <button 
                  className="w-full px-4 py-3.5 md:py-2.5 rounded-lg md:rounded bg-[#b37022] hover:bg-[#c9802a] text-white transition-colors font-bold text-lg md:text-sm whitespace-nowrap shadow-lg"
                  // O clique aqui será interceptado pelo handleGlobalClick
                >
                  Accept Cookies
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
