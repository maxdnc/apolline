import { MenuItem } from '../types/headerMenu';

export const menuItems: MenuItem[] = [
  { title: 'Acceuil', href: '/' },
  {
    title: 'Nos Services',
    submenu: [
      { title: 'Laser', href: '/services/laser' },
      { title: 'Cryolipolyse', href: '/services/cryolipolyse' },
      { title: 'Hydralift', href: '/services/hydralift' },
      { title: 'HIFU', href: '/services/HIFU' },
    ],
  },
  { title: 'À Propos', href: '/aPropos' },
  { title: 'Contact', href: '/contact' },
];
