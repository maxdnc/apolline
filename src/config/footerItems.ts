import { FooterLinks } from '../types/footerNavigation';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const footerLinks: FooterLinks = {
  nosServices: [
    { title: 'Laser', href: '/services/Laser' },
    { title: 'Cryolipolyse', href: '/services/cryolipolyse' },
    { title: 'Hydralift', href: '/services/hydralift' },
    { title: 'Cryovisage', href: '/services/hifu' },
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
