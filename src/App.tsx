import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

type Step = 'q1' | 'q2' | 'q3' | 'loading';

export default function App() {
  const [step, setStep] = useState<Step>('q1');
  const affiliateLink = "https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm#aff=cristhophersem";
  
  const handleNext = (nextStep: Step) => {
    setStep(nextStep);
  };

  useEffect(() => {
    if (step === 'loading') {
      const timer = setTimeout(() => {
        // Tenta redirecionar a janela principal (sai do iframe se possível)
        try {
          if (window.top && window.top !== window.self) {
             window.open(affiliateLink, '_blank'); // Abre em nova aba para evitar bloqueio no preview
          } else {
             window.location.href = affiliateLink;
          }
        } catch (e) {
          // Fallback seguro caso haja erro de cross-origin
          window.location.href = affiliateLink;
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#060a17] flex flex-col items-center text-slate-200 font-sans">
      {/* Header styling based on the affiliate site */}
      <header className="bg-[#0b132b]/90 backdrop-blur-md text-white py-4 px-6 flex items-center justify-center border-b border-white/5 shadow-md w-full fixed top-0 left-0 z-50">
        <div className="flex items-center justify-center">
          <img 
            src="/images/logo.png" 
            alt="Advanced Bionutritionals" 
            className="h-10 object-contain"
            onError={(e) => {
              // Fallback caso a imagem ainda não tenha sido enviada
              (e.target as HTMLImageElement).style.display = 'none';
              const fallback = document.getElementById('logo-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div id="logo-fallback" style={{display: 'none'}} className="items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 font-bold text-lg font-sans">
              ab
            </div>
            <span className="text-xl font-bold font-sans tracking-tight leading-none text-left">
              advanced<br/>
              <span className="text-sm font-normal text-slate-300">bionutritionals&reg;</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Quiz Area */}
      <div className="flex-grow flex items-center justify-center w-full p-4 pt-24">
        <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10 w-full max-w-lg p-8 md:p-10 min-h-[360px] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {step === 'q1' && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-8 leading-tight">Do you often feel a lack of energy during the day?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('q2')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    Yes, almost every day
                  </button>
                  <button 
                    onClick={() => handleNext('q2')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    Sometimes
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q2' && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-8 leading-tight">Are you over 40 years old?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('q3')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => handleNext('q3')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    No
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q3' && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-8 leading-tight">Would you like a natural way to support healthy blood flow and energy levels?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('loading')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    Yes, I want a natural solution
                  </button>
                  <button 
                    onClick={() => handleNext('loading')}
                    className="bg-[#b37022] hover:bg-[#c9802a] text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 w-full cursor-pointer shadow-[0_0_15px_rgba(179,112,34,0.3)] hover:shadow-[0_0_25px_rgba(179,112,34,0.5)] border border-[#c9802a]/30"
                  >
                    Yes, I want to boost my energy
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center justify-center space-y-6"
              >
                <Loader2 className="w-14 h-14 text-[#b37022] animate-spin" />
                <div className="text-white font-medium text-xl text-center">
                  <p>Analyzing your answers...</p>
                  <p className="text-base mt-2 text-slate-400 font-sans mb-4">Redirecting to the presentation...</p>
                  
                  <a 
                    href={affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm text-[#b37022] hover:text-[#c9802a] hover:underline font-normal transition-colors"
                  >
                    Not redirecting? Click here to continue.
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
