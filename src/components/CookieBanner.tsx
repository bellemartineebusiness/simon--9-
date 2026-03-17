"use client";

import { useSyncExternalStore, useState } from "react";
import Link from "next/link";

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getConsentSnapshot() {
  return localStorage.getItem("cookie-consent");
}

function getServerSnapshot() {
  return null;
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribeToStorage, getConsentSnapshot, getServerSnapshot);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const acceptAll = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    window.dispatchEvent(new Event("storage"));
  };

  const acceptNecessary = () => {
    const newConsent = { necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    window.dispatchEvent(new Event("storage"));
  };

  const savePreferences = () => {
    const newConsent = { ...preferences, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    window.dispatchEvent(new Event("storage"));
  };

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8e0d5] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1 tracking-wide">
                Vi använder cookies 🍪
              </h3>
              <p className="text-xs text-[#666] leading-relaxed">
                Vi använder cookies för att förbättra din upplevelse på vår webbplats. Enligt{" "}
                <strong>ePrivacydirektivet</strong> behöver vi ditt samtycke för icke-nödvändiga cookies.{" "}
                <Link href="/cookies" className="underline hover:text-[#c8a87a]">
                  Läs mer om vår cookiepolicy
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-xs tracking-widest uppercase border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#f5f0eb] transition-colors"
              >
                Anpassa
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-xs tracking-widest uppercase border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#f5f0eb] transition-colors"
              >
                Endast nödvändiga
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs tracking-widest uppercase bg-[#1a1a1a] text-white hover:bg-[#c8a87a] transition-colors"
              >
                Acceptera alla
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#1a1a1a] tracking-wide">
              Cookieinställningar
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-[#e8e0d5]">
                <div>
                  <p className="text-xs font-semibold text-[#1a1a1a]">Nödvändiga cookies</p>
                  <p className="text-xs text-[#666]">Krävs för att webbplatsen ska fungera korrekt.</p>
                </div>
                <div className="text-xs text-[#666] italic">Alltid aktiv</div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#e8e0d5]">
                <div>
                  <p className="text-xs font-semibold text-[#1a1a1a]">Analyticscookies</p>
                  <p className="text-xs text-[#666]">Hjälper oss förstå hur webbplatsen används.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c8a87a]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-xs font-semibold text-[#1a1a1a]">Marknadsföringscookies</p>
                  <p className="text-xs text-[#666]">Används för personanpassad reklam.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-focus:ring-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c8a87a]"></div>
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-xs tracking-widest uppercase border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#f5f0eb] transition-colors"
              >
                Tillbaka
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-xs tracking-widest uppercase bg-[#1a1a1a] text-white hover:bg-[#c8a87a] transition-colors"
              >
                Spara inställningar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
