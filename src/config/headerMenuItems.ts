import { MenuItem } from '../types/headerMenu';

export const menuItems: MenuItem[] = [
  { title: 'Acceuil', href: '/' },
  {
    title: 'Soins',
    submenu: [
      { title: 'Laser', href: '/products/laser' },
      { title: 'Cryolipolyse', href: '/products/cryolipolyse' },
      { title: 'Hydralift', href: '/products/hydralift' },
      { title: 'HIFU', href: '/products/HIFU' },
    ],
  },
  { title: 'À Propos', href: '/aPropos' },
  { title: 'Contact', href: '/contact' },
];
