import { FooterLinks } from '../types/footerNavigation';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const footerLinks: FooterLinks = {
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

export const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];
