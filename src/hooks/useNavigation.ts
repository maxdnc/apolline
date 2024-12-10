import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const isCurrentPath = (href: string): boolean => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const toggleSubmenu = (index: number): void => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return {
    isOpen,
    activeSubmenu,
    isCurrentPath,
    toggleMenu,
    toggleSubmenu,
  };
};
