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
    <div className="min-h-screen bg-[#f4f7f6] flex flex-col items-center text-slate-800 font-sans">
      {/* Header styling based on the affiliate site */}
      <header className="bg-[#0b132b] text-white py-4 px-6 flex items-center justify-center shadow-md w-full fixed top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400 font-bold text-lg font-sans">
            ab
          </div>
          <span className="text-xl font-bold font-sans tracking-tight leading-none text-left">
            advanced<br/>
            <span className="text-sm font-normal text-slate-300">bionutritionals&reg;</span>
          </span>
        </div>
      </header>

      {/* Main Quiz Area */}
      <div className="flex-grow flex items-center justify-center w-full p-4 pt-24">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-lg p-8 md:p-10 min-h-[360px] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center">
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
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#0b132b] mb-8 leading-tight">Do you often feel a lack of energy during the day?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('q2')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
                  >
                    Yes, almost every day
                  </button>
                  <button 
                    onClick={() => handleNext('q2')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
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
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#0b132b] mb-8 leading-tight">Are you over 40 years old?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('q3')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => handleNext('q3')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
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
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#0b132b] mb-8 leading-tight">Would you like a natural way to support healthy blood flow and energy levels?</h3>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handleNext('loading')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
                  >
                    Yes, show me the video
                  </button>
                  <button 
                    onClick={() => handleNext('loading')}
                    className="bg-[#b37022] hover:bg-[#9a5e19] text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors w-full cursor-pointer shadow-md"
                  >
                    I'm interested
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
                <div className="text-[#0b132b] font-medium text-xl text-center">
                  <p>Analyzing your answers...</p>
                  <p className="text-base mt-2 text-slate-500 font-sans mb-4">Redirecting to the presentation...</p>
                  
                  <a 
                    href={affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm text-[#b37022] hover:underline font-normal"
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
