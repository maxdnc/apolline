import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types/headerMenu';

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
  isCurrentPath: (href: string) => boolean;
}

export const DesktopMenuItem = ({
  item,
  isCurrentPath,
}: DesktopMenuItemProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFocused(true);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!menuRef.current?.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
    }
  };

  if (item.submenu) {
    return (
      <div
        ref={menuRef}
        className="relative inline-block group"
        onBlur={handleBlur}
      >
        <div
          tabIndex={0}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className={`flex items-center space-x-1  py-2 cursor-pointer ${
            item.submenu.some((subItem) => isCurrentPath(subItem.href))
              ? 'text-primary-950 font-bold'
              : 'text-primary-950 group-hover:text-primary-950'
          }`}
          role="button"
          aria-expanded={isFocused}
          aria-haspopup="true"
        >
          <span>{item.title}</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <div
          className={`absolute z-50 top-full left-0 pt-2 min-w-full transition-all duration-300 ${
            isFocused
              ? 'visible opacity-100'
              : 'invisible opacity-0 pointer-events-none'
          } group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <div
            className={`bg-white rounded-md shadow-lg py-2 whitespace-nowrap transform transition-transform duration-300 ${
              isFocused ? 'translate-y-0' : 'translate-y-2'
            } group-hover:translate-y-0`}
          >
            {item.submenu.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.href}
                onFocus={handleFocus}
                className={`block px-4 py-2 text-sm  transition ${
                  isCurrentPath(subItem.href)
                    ? 'text-primary-950 font-bold'
                    : 'text-primary-950 hover:bg-secondary-100'
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
      className={` py-2 ${
        item.href && isCurrentPath(item.href)
          ? 'text-primary-950 font-bold'
          : 'text-primary-950 hover:text-primary-950'
      }`}
    >
      {item.title}
    </Link>
  );
};
