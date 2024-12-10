import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  // Handle inert and focus management
  useEffect(() => {
    const mainContent = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (isOpen) {
      // Disable interactions for content outside the menu
      if (mainContent) mainContent.inert = true;
      if (footer) footer.inert = true;
      document.body.style.overflow = 'hidden';
    }

    // Cleanup function
    return () => {
      if (mainContent) mainContent.inert = false;
      if (footer) footer.inert = false;
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle resize
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
