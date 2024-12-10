import { MenuItem } from '../types/headerMenu';

export const menuItems: MenuItem[] = [
  { title: 'Acceuil', href: '/' },
  {
    title: 'Soins visage',
    submenu: [
      { title: 'Hifu', href: '/products/hifu' },
      { title: 'Peeling', href: '/products/peeling' },
      { title: 'Cryovisage', href: '/products/cryovisage' },
    ],
  },
  {
    title: 'Soins corps',
    submenu: [
      { title: 'Épilation laser définitive', href: '/services/consulting' },
      { title: 'Cryolipolyse à Aspiration', href: '/services/training' },
      { title: 'Cryolipolyse à Plaques', href: '/services/support' },
    ],
  },
  { title: 'À Propos', href: '/about' },
  { title: 'Contact', href: '/contact' },
];
