import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types/headerMenu';
import { submenuVariants } from '../../../config/animationsHeader';

interface MobileMenuItemProps {
  item: MenuItem;
  index: number;
  isCurrentPath: (href: string) => boolean;
  toggleMenu: () => void;
  toggleSubmenu: (index: number) => void;
  activeSubmenu: number | null;
}

export const MobileMenuItem = ({
  item,
  index,
  isCurrentPath,
  toggleMenu,
  toggleSubmenu,
  activeSubmenu,
}: MobileMenuItemProps) => {
  if (item.submenu) {
    const isSubmenuOpen = activeSubmenu === index;
    return (
      <div>
        <button
          onClick={() => toggleSubmenu(index)}
          className={`flex items-center justify-between w-full py-2 ${
            item.submenu.some((subItem) => isCurrentPath(subItem.href))
              ? 'text-red-400'
              : 'text-slate-800 hover:text-slate-900'
          }`}
          aria-expanded={activeSubmenu === index}
        >
          <span className="text-sm font-medium">{item.title}</span>
          <ChevronDown
            className={`w-4 h-4 transform transition-transform duration-300 delay-100 ease-quint ${
              activeSubmenu === index ? 'rotate-180' : ''
            }`}
          />
        </button>

        <motion.div
          initial={false}
          animate={isSubmenuOpen ? 'open' : 'closed'}
          variants={submenuVariants}
          className="pl-4 flex flex-col gap-2 overflow-hidden"
        >
          {item.submenu.map((subItem, subIndex) => (
            <Link
              key={subIndex}
              href={subItem.href}
              onClick={toggleMenu}
              className={`block py-2 text-sm ${
                isCurrentPath(subItem.href)
                  ? 'text-red-400'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {subItem.title}
            </Link>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <Link
      href={item.href || '#'}
      onClick={toggleMenu}
      className={`block py-2 text-sm ${
        item.href && isCurrentPath(item.href)
          ? 'text-red-400'
          : 'text-slate-800 hover:text-slate-900'
      }`}
    >
      {item.title}
    </Link>
  );
};
