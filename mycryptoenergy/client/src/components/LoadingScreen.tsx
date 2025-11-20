import { useEffect, useState } from "react";
import { APP_LOGO } from "@/const";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Masquer l'écran de chargement après 2.5 secondes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Fond avec particules */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5" />
        {/* Particules de fond */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo tournant avec effet de glow */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-50">
            <img
              src={APP_LOGO}
              alt="Loading"
              className="w-32 h-32 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
          
          {/* Logo principal */}
          <img
            src={APP_LOGO}
            alt="MyCryptoEnergy"
            className="relative w-32 h-32 animate-spin drop-shadow-2xl"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Texte de bienvenue */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="block text-gradient-quantum">Bienvenue</span>
            <span className="block mt-2">dans le Web4</span>
          </h1>
          
          {/* Barre de progression animée */}
          <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-pink-500 to-secondary animate-loading-bar"
            />
          </div>
          
          <p className="text-sm text-muted-foreground animate-pulse">
            Initialisation de l'écosystème quantique...
          </p>
        </div>
      </div>
    </div>
  );
}
