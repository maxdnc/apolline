import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types/navigation';

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
  isCurrentPath: (href: string) => boolean;
  toggleSubmenu: (index: number) => void;
  activeSubmenu: number | null;
}

export const DesktopMenuItem = ({
  item,
  index,
  isCurrentPath,
  toggleSubmenu,
  activeSubmenu,
}: DesktopMenuItemProps) => {
  if (item.submenu) {
    return (
      <div className="relative inline-block">
        <button
          onClick={() => toggleSubmenu(index)}
          className={`flex items-center space-x-1 font-semibold py-2 ${
            item.submenu.some((subItem) => isCurrentPath(subItem.href))
              ? 'text-red-400'
              : 'text-slate-800 group-hover:text-slate-900'
          }`}
          aria-expanded={activeSubmenu === index}
          aria-haspopup="true"
        >
          <span>{item.title}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-2 min-w-full transition-all duration-200">
          <div className="bg-white rounded-md shadow-lg py-2 whitespace-nowrap">
            {item.submenu.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.href}
                className={`block px-4 py-2 text-sm font-semibold ${
                  isCurrentPath(subItem.href)
                    ? 'text-red-400'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href || '#'}
      className={`font-semibold py-2 ${
        item.href && isCurrentPath(item.href)
          ? 'text-red-400'
          : 'text-slate-800 hover:text-slate-900'
      }`}
    >
      {item.title}
    </Link>
  );
};
