import { FaTelegram, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';

const TelegramButton = () => {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    // Show notification every 3 minutes
    const showNotificationTimer = () => {
      setShowNotification(true);
      // Small delay to ensure the element is rendered before animating
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      // Remove auto-hide - notification stays until user closes it
    };

    let initialTimer: NodeJS.Timeout | null = null;

    // Only show initial delay on homepage
    if (isHomepage) {
      // Show first notification after 5 seconds on homepage
      initialTimer = setTimeout(showNotificationTimer, 5000);
    }

    // Set up interval to show notification every 3 minutes
    const intervalTimer = setInterval(showNotificationTimer, 180000);

    return () => {
      if (initialTimer) {
        clearTimeout(initialTimer);
      }
      clearInterval(intervalTimer);
    };
  }, [isHomepage]);

  const handleTelegramClick = () => {
    // Replace with your actual Telegram username or link
    const telegramUsername = 'codava_dev'; // Change this to your actual username
    const telegramUrl = `https://t.me/${telegramUsername}`;
    window.open(telegramUrl, '_blank');
  };

  const closeNotification = () => {
    setIsVisible(false);
    setTimeout(() => setShowNotification(false), 300);
  };

  return (
    <>
      {/* Custom slower pulse animation */}
      <style>{`
        @keyframes slow-ping {
          75%, 100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .animate-slow-ping {
          animation: slow-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
      {/* Chat Bubble Notification */}
      {showNotification && (
        <div className={`fixed bottom-28 right-8 z-50 transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-x-0 opacity-100 scale-100 rotate-0' 
            : 'translate-x-8 opacity-0 scale-95 rotate-2'
        }`}>
          {/* Chat bubble with tail pointing to the button */}
          <div className="relative">
            {/* Main bubble */}
            <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-4 max-w-xs relative">
              <div className="flex items-start gap-3">
                <div className="bg-white p-1 rounded-xl">
                  <img 
                    src="/logo-circle-black.png" 
                    alt="Site Logo" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm mb-1.5">
                    {t('telegram.notification_title')}
                  </h4>
                  <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                    {t('telegram.notification_description')}
                  </p>
                  <button
                    onClick={handleTelegramClick}
                    className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors duration-200 flex items-center gap-1 group"
                  >
{t('telegram.claim_discount')}
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </button>
                </div>
                <button
                  onClick={closeNotification}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 p-1 hover:bg-gray-800/50 rounded-lg"
                >
                  <FaTimes className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Chat bubble tail pointing down to the button - properly positioned */}
            <div className="absolute -bottom-3 right-5 w-6 h-6 bg-gray-900/95 border-r border-b border-gray-700/50 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Telegram Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleTelegramClick}
          className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-400/20"
          aria-label="Contact us on Telegram"
          title="Chat with us on Telegram"
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <FaTelegram className="w-9 h-9 relative z-10" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-slow-ping"></div>
        </button>
        
        {/* Floating label */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
{t('telegram.chat_with_us')}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default TelegramButton;
