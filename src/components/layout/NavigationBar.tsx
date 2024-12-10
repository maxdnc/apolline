'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import MainButtonLink from '../reusable-ui/MainButtonLink';
import { motion, AnimatePresence } from 'motion/react';
import HamburgerIcon from './HamburgerIcon';

// Types for menu structure
interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  // Cleanup effect for body overflow
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Effect to handle screen resize
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

  const menuItems: MenuItem[] = [
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

  // Animation variants remain the same
  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const contentMenuVariants = {
    closed: {
      opacity: 0,
      transition: {
        opacity: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
      },
    },
    open: {
      opacity: 1,
      transition: {
        opacity: { delay: 0.35, duration: 0.6, ease: [0.7, 0, 0.3, 1] },
      },
    },
  };

  const submenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
        opacity: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
        opacity: { delay: 0.2, duration: 0.3, ease: [0.83, 0, 0.17, 1] },
      },
    },
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div className="relative inline-block">
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`flex items-center space-x-1 font-semibold py-2 ${
                        item.submenu.some((subItem) =>
                          isCurrentPath(subItem.href)
                        )
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
                ) : (
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
                )}
              </div>
            ))}
            <MainButtonLink href="/" variant="primary">
              Rendez-vous & Tarif
            </MainButtonLink>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-4 rounded-md text-slate-800 hover:text-slate-900 relative z-50"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? 'Close menu' : 'Open menu'}
            </span>
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4 pt-20">
              <motion.div
                className="mt-6"
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentMenuVariants}
              >
                {menuItems.map((item, index) => (
                  <div key={index} className="py-4 border-t border-slate-200">
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className={`flex items-center justify-between w-full py-2 ${
                            item.submenu.some((subItem) =>
                              isCurrentPath(subItem.href)
                            )
                              ? 'text-red-400'
                              : 'text-slate-800 hover:text-slate-900'
                          }`}
                          aria-expanded={activeSubmenu === index}
                        >
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform duration-[400ms] delay-100 ease-[cubic-bezier(0.83, 0, 0.17, 1) ${
                              activeSubmenu === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={submenuVariants}
                              className="pl-4 flex flex-col gap-2 overflow-hidden"
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
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
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className={`block py-2 text-sm ${
                          item.href && isCurrentPath(item.href)
                            ? 'text-red-400'
                            : 'text-slate-800 hover:text-slate-900'
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-8">
                  <MainButtonLink href="/" variant="primary" fullWidth>
                    Rendez-vous & Tarif
                  </MainButtonLink>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;
