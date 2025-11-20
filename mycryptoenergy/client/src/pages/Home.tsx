import { Button } from "@/components/ui/button";
import { APP_TITLE, APP_LOGO, SITE_DESCRIPTION } from "@/const";
import QuantumParticles from "@/components/QuantumParticles";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Zap, Shield, Network, Coins, TrendingUp, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <QuantumParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt={APP_TITLE} className="w-8 h-8 quantum-glow" />
            <span className="text-xl font-bold">{APP_TITLE}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#technology" className="text-sm hover:text-primary transition-colors">Technologie</a>
            <a href="#tokens" className="text-sm hover:text-primary transition-colors">Tokens</a>
            <a href="#invest" className="text-sm hover:text-primary transition-colors">Investir</a>
            <Button size="sm" className="quantum-glow">
              Commencer <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-pink-500/10 border border-primary/30 rounded-full text-sm font-medium">
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Innovation Quantique</span>
            </div>
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight">
              <span className="block text-sm lg:text-base font-light tracking-[0.3em] text-muted-foreground/60 uppercase mb-4">{APP_TITLE}</span>
              <span className="block text-gradient-quantum mt-2 tracking-tight">
                Banque d'Énergie
              </span>
              <span className="block text-gradient-quantum tracking-tight">
                Quantique
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {SITE_DESCRIPTION}. Une nouvelle classe d'actifs : l'énergie réelle, 
              sécurisée par la physique quantique.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="quantum-glow text-lg px-8 relative overflow-hidden group">
                <span className="relative z-10">Explorer l'écosystème</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 luxury-shimmer" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:border-primary/50 transition-all">
                Documentation
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8 border-t border-border/30 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary quantum-glow">100%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-pink-500 bg-clip-text text-transparent quantum-glow-pink">∞</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Scalable</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent quantum-glow-accent">24/7</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Actif</div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] hidden lg:block">
            <img 
              src="/hero-quantum.png" 
              alt="Quantum Energy Visualization" 
              className="w-full h-full object-contain animate-float"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Section 01 - Introduction */}
      <section className="relative py-32 bg-card/50" id="technology">
        <div className="container mx-auto px-6">
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-6xl font-bold text-muted-foreground/20">01</div>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight">
                Rapide. Puissant. <span className="text-gradient-quantum">Sécurisé.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MyCryptoEnergy combine trois révolutions technologiques : 
                l'énergie verte tokenisée, la cryptographie post-quantique, 
                et le tirage aléatoire quantique (QRNG) garantissant l'intégrité 
                absolue des données.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center quantum-glow flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Énergie Verte Tokenisée</h3>
                    <p className="text-muted-foreground">Chaque kWh produit devient un actif numérique vérifiable</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center quantum-glow-secondary flex-shrink-0">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cryptographie Post-Quantique</h3>
                    <p className="text-muted-foreground">Résistant aux ordinateurs quantiques de demain</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center quantum-glow-accent flex-shrink-0">
                    <Network className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">QRNG - Aléatoire Quantique</h3>
                    <p className="text-muted-foreground">Impossible à prédire, impossible à falsifier</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="/quantum-network.png" 
                alt="Quantum Network" 
                className="w-full h-full object-cover rounded-3xl quantum-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl flex items-end justify-center pb-12">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-gradient-quantum">Web4</div>
                  <p className="text-foreground/90 font-medium">Infrastructure du Futur</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 02 - QRNG */}
      <section className="relative py-32 bg-primary/5">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={100}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] order-2 lg:order-1">
              <img 
                src="/hero-quantum.png" 
                alt="QRNG Visualization" 
                className="w-full h-full object-contain animate-pulse-glow"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="text-6xl font-bold text-muted-foreground/20">02</div>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight">
                Le QRNG : <span className="text-gradient-quantum">L'Aléatoire Ultime</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le QRNG (Quantum Random Number Generator) repose sur des phénomènes 
                physiques irréductibles : émission spontanée de photons, fluctuations 
                du vide quantique, effet tunnel, indétermination de Heisenberg.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Pourquoi c'est révolutionnaire ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Ne peut pas être anticipé ou manipulé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Impossible à reproduire ou influencer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Résiste aux supercalculateurs quantiques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 03 - Hashage Quantique */}
      <section className="relative py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={200}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-6xl font-bold text-muted-foreground/20">03</div>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase tracking-tight">
                <span className="text-gradient-quantum">Hashage Quantique</span> Hybride
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre système QRHH (Quantum-Resistant Hybrid Hashing) combine 
                un pré-hashage post-quantique, un sel QRNG parfait, et un hash 
                final Keccak modifié pour une sécurité conçue pour 2040+.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Lattice-based (CRYSTALS, Kyber)</h3>
                  <p className="text-sm text-muted-foreground">Résistant à l'algorithme de Shor</p>
                </div>
                <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-secondary">XMSS / SPHINCS+</h3>
                  <p className="text-sm text-muted-foreground">Signatures hash-based sécurisées</p>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 text-accent">Keccak Modifié</h3>
                  <p className="text-sm text-muted-foreground">Optimisé contre Grover Half-Search</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="/energy-core.png" 
                alt="Quantum Security Core" 
                className="w-full h-full object-cover rounded-3xl quantum-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-3xl flex items-end justify-center pb-12">
                <div className="text-center space-y-4 p-8">
                  <Shield className="w-16 h-16 mx-auto text-primary quantum-glow" />
                  <div className="text-3xl font-bold">Sécurité Absolue</div>
                  <p className="text-foreground/80">Même un ordinateur quantique universel ne peut pas inverser nos hashs</p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 04 - Rise Layer */}
      <section className="relative py-32 bg-secondary/5" id="tokens">
        <div className="container mx-auto px-6">
          <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="text-6xl font-bold text-muted-foreground/20 mb-4">04</div>
            <h2 className="text-5xl lg:text-6xl font-bold uppercase mb-6 tracking-tight">
              La <span className="text-gradient-quantum">Rise Layer</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              L'assistant numérique entre l'énergie réelle et le monde quantique. 
              La Rise Layer (Real Indexed Secure Energy Layer) assure la conversion 
              en temps réel de l'énergie produite en actifs numériques sécurisés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center quantum-glow">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Indexation Énergétique</h3>
              <p className="text-sm text-muted-foreground">
                Chaque kWh produit est transformé en données cryptées validées quantiquement
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-secondary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center quantum-glow-secondary">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Intégrité Totale</h3>
              <p className="text-sm text-muted-foreground">
                Toutes les mesures sont signées avec QRNG, hachées et ancrées dans QubitChain
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-accent transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center quantum-glow-accent">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Audit Quantique</h3>
              <p className="text-sm text-muted-foreground">
                Des tirages quantiques déterminent les audits de manière imprévisible
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center quantum-glow">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Distribution Programmable</h3>
              <p className="text-sm text-muted-foreground">
                Les flux énergétiques deviennent des flux financiers automatisés
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 space-y-6 quantum-glow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Green Coin</h3>
                  <p className="text-sm text-muted-foreground">Droit sur les revenus énergétiques</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Token adossé à la production d'énergie verte réelle. Chaque Green Coin 
                représente une part des revenus générés par les centrales solaires et 
                les opérations de minage.
              </p>
              <Button className="w-full quantum-glow">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 via-pink-500/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8 space-y-6 quantum-glow-pink">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-2xl font-bold quantum-glow-pink">
                  Q
                </div>
                <div>
                  <h3 className="text-2xl font-bold">QubitCoin</h3>
                  <p className="text-sm text-muted-foreground">Actif de réserve quantique</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Actif de réserve sécurisé par cryptographie quantique. QubitCoin est 
                conçu comme une réserve de valeur pour l'ère quantique, impossible à 
                pirater même avec les technologies futures.
              </p>
              <Button variant="secondary" className="w-full quantum-glow-secondary">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 05 - Pourquoi Investir */}
      <section className="relative py-32 bg-card/50" id="invest">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={100}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="text-6xl font-bold text-muted-foreground/20 mb-4">05</div>
            <h2 className="text-5xl lg:text-6xl font-bold uppercase mb-6 tracking-tight">
              Pourquoi <span className="text-gradient-quantum">Investir</span> ?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MyCryptoEnergy offre une combinaison unique d'actifs réels, de sécurité 
              quantique et d'alignement avec le futur industriel du Web4.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center quantum-glow">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Actifs Réels = Confiance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Green Coin et QubitCoin ne reposent pas sur un récit. Ils reposent 
                sur des centrales solaires, des data centers, du minage et des revenus 
                matériels. C'est du RWA (Real World Asset) dans sa forme la plus pure.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center quantum-glow-secondary">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Sécurité Quantique = Longévité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les fonds institutionnels cherchent un actif rare, non corrélé aux 
                marchés traditionnels, impossible à pirater, et utilisable comme 
                réserve de valeur 2040-2060. QubitCoin coche toutes les cases.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center quantum-glow-accent">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">QRNG = Argument Massue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nos certificats énergétiques ne peuvent pas être falsifiés, car chaque 
                transaction est scellée par un tirage aléatoire quantique issu de la 
                physique fondamentale. Aucune blockchain actuelle n'offre cela.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center quantum-glow">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Le Futur est Quantique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les États, l'Europe, la Chine, les US investissent massivement dans 
                l'informatique quantique et les supply chains énergétiques souveraines. 
                MyCryptoEnergy s'aligne sur ce futur.
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-quantum overflow-hidden">
        <div className="absolute inset-0 luxury-shimmer opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Rejoignez la <span className="text-gradient-quantum filter-none">Révolution Quantique</span>
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light">
              MyCryptoEnergy ne crée pas seulement un actif. 
              Nous créons la nouvelle base monétaire de l'ère quantique.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 quantum-glow-pink relative overflow-hidden group border-2 border-pink-500/30">
                <span className="relative z-10">Commencer maintenant</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 luxury-shimmer" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-background/20 hover:bg-background/40 border-2 border-foreground/20 hover:border-foreground/40 transition-all">
                Contacter l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={APP_LOGO} alt={APP_TITLE} className="w-8 h-8 quantum-glow" />
                <span className="text-xl font-bold">{APP_TITLE}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La première banque d'énergie quantique au monde
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technologie</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">QRNG</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hashage Quantique</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Rise Layer</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">QubitChain</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tokens</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Green Coin</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">QubitCoin</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Communauté</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 {APP_TITLE}. Tous droits réservés. Propulsé par la physique quantique.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
