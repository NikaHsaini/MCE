import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="fixed bottom-8 right-8 flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group z-10"
      aria-label="Scroll to explore"
    >
      <span className="text-sm font-medium tracking-wider uppercase">
        Scroll
      </span>
      <span className="text-xs opacity-70">pour explorer</span>
      <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary transition-colors" />
    </button>
  );
}
