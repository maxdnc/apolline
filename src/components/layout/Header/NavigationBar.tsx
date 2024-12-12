'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../../../config/headerMenuItems';
import {
  menuVariants,
  contentMenuVariants,
} from '../../../config/animationsHeader';
import { useNavigation } from '../../../hooks/useNavigation';
import { DesktopMenuItem } from './DesktopMenuItem';
import { MobileMenuItem } from './MobileMenuItem';
import MainButtonLink from '../../reusable-ui/MainButtonLink';
import HamburgerIcon from './HamburgerIcon';

const NavigationBar = () => {
  const { isOpen, activeSubmenu, isCurrentPath, toggleMenu, toggleSubmenu } =
    useNavigation();

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
                <DesktopMenuItem
                  item={item}
                  index={index}
                  isCurrentPath={isCurrentPath}
                />
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
            className="fixed inset-0 bg-slate-200 z-40 md:hidden"
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
                    <MobileMenuItem
                      item={item}
                      index={index}
                      isCurrentPath={isCurrentPath}
                      toggleSubmenu={toggleSubmenu}
                      activeSubmenu={activeSubmenu}
                      toggleMenu={toggleMenu}
                    />
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
