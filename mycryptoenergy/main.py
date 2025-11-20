#!/usr/bin/env python3
"""
MyCryptoEnergy - Script d'installation et de lancement
Installe automatiquement les dépendances et lance le serveur de développement
"""

import os
import sys
import subprocess
import platform
from pathlib import Path

def print_banner():
    """Affiche la bannière du projet"""
    banner = """
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║              MyCryptoEnergy                               ║
    ║         Banque d'Énergie Quantique                        ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    """
    print(banner)

def check_node():
    """Vérifie si Node.js est installé"""
    try:
        result = subprocess.run(['node', '--version'], 
                              capture_output=True, 
                              text=True, 
                              check=True)
        version = result.stdout.strip()
        print(f"✓ Node.js détecté : {version}")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("✗ Node.js n'est pas installé")
        print("  Veuillez installer Node.js depuis : https://nodejs.org/")
        return False

def check_pnpm():
    """Vérifie si pnpm est installé, sinon propose de l'installer"""
    try:
        result = subprocess.run(['pnpm', '--version'], 
                              capture_output=True, 
                              text=True, 
                              check=True)
        version = result.stdout.strip()
        print(f"✓ pnpm détecté : {version}")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("✗ pnpm n'est pas installé")
        response = input("  Voulez-vous installer pnpm maintenant ? (o/n) : ").lower()
        if response == 'o':
            try:
                print("  Installation de pnpm...")
                subprocess.run(['npm', 'install', '-g', 'pnpm'], check=True)
                print("✓ pnpm installé avec succès")
                return True
            except subprocess.CalledProcessError:
                print("✗ Échec de l'installation de pnpm")
                return False
        return False

def install_dependencies():
    """Installe les dépendances du projet"""
    print("\n📦 Installation des dépendances...")
    print("   Cela peut prendre quelques minutes...\n")
    
    try:
        subprocess.run(['pnpm', 'install'], check=True)
        print("\n✓ Dépendances installées avec succès")
        return True
    except subprocess.CalledProcessError:
        print("\n✗ Échec de l'installation des dépendances")
        return False

def start_dev_server():
    """Lance le serveur de développement"""
    print("\n🚀 Lancement du serveur de développement...")
    print("   Le site sera accessible sur : http://localhost:3000\n")
    print("   Appuyez sur Ctrl+C pour arrêter le serveur\n")
    
    try:
        subprocess.run(['pnpm', 'dev'], check=True)
    except KeyboardInterrupt:
        print("\n\n✓ Serveur arrêté")
    except subprocess.CalledProcessError:
        print("\n✗ Erreur lors du lancement du serveur")

def main():
    """Fonction principale"""
    print_banner()
    
    # Vérifier que nous sommes dans le bon répertoire
    if not Path('package.json').exists():
        print("✗ Erreur : package.json non trouvé")
        print("  Assurez-vous d'exécuter ce script depuis le répertoire du projet")
        sys.exit(1)
    
    # Vérifier Node.js
    if not check_node():
        sys.exit(1)
    
    # Vérifier pnpm
    if not check_pnpm():
        sys.exit(1)
    
    # Menu principal
    print("\n" + "="*60)
    print("Que souhaitez-vous faire ?")
    print("="*60)
    print("1. Installer les dépendances uniquement")
    print("2. Installer les dépendances et lancer le serveur")
    print("3. Lancer le serveur (dépendances déjà installées)")
    print("4. Quitter")
    print("="*60)
    
    choice = input("\nVotre choix (1-4) : ").strip()
    
    if choice == '1':
        if install_dependencies():
            print("\n✓ Installation terminée !")
            print("  Vous pouvez maintenant lancer le serveur avec : pnpm dev")
    
    elif choice == '2':
        if install_dependencies():
            input("\nAppuyez sur Entrée pour lancer le serveur...")
            start_dev_server()
    
    elif choice == '3':
        start_dev_server()
    
    elif choice == '4':
        print("\nAu revoir ! 👋")
    
    else:
        print("\n✗ Choix invalide")
        sys.exit(1)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n✓ Programme interrompu")
        sys.exit(0)
