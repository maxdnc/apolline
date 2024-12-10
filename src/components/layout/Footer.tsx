import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  const footerLinks = {
    soinsVisage: [
      { title: 'Hifu', href: '/products/hifu' },
      { title: 'Peeling', href: '/products/peeling' },
      { title: 'Cryovisage', href: '/products/cryovisage' },
    ],
    soinsCorps: [
      { title: 'Épilation laser définitive', href: '/services/consulting' },
      { title: 'Cryolipolyse à Aspiration', href: '/services/training' },
      { title: 'Cryolipolyse à Plaques', href: '/services/support' },
    ],
    navigation: [
      { title: 'Accueil', href: '/' },
      { title: 'À Propos', href: '/about' },
      { title: 'Contact', href: '/contact' },
      { title: 'Rendez-vous & Tarif', href: '/booking' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Logo
            </Link>
            <p className="mt-4 text-sm text-white">
              Centre d&apos;esthétique spécialisé dans les soins du visage et du
              corps
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            {footerLinks.navigation.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-sm text-white hover:text-white mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Soins Visage</h3>
            {footerLinks.soinsVisage.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-sm text-white hover:text-white mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 ">Soins Corps</h3>
            {footerLinks.soinsCorps.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-sm text-white hover:text-white mb-2"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Media */}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-white flex justify-between">
          <p>
            © {new Date().getFullYear()} Votre Entreprise. Tous droits
            réservés.
          </p>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
