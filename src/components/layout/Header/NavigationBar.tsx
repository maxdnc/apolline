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
import Image from 'next/image';
import logoB from '../../../../public/svg/logoB.svg';
import logoSmall from '../../../../public/svg/logoSmall.svg';

const NavigationBar = () => {
  const { isOpen, activeSubmenu, isCurrentPath, toggleMenu, toggleSubmenu } =
    useNavigation();

  return (
    <nav className="bg-secondary-100 py-4">
      <div className="max-w-largest mx-auto px-[40px] lg:px-[70px]">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center h-full">
            {/* Mobile logo */}
            <Image
              src={logoSmall}
              alt="Maison Apoline small logo"
              priority
              className="h-full w-auto max-h-14 object-contain block md:hidden"
            />

            {/* Desktop logo */}
            <Image
              src={logoB}
              alt="Maison Apoline large logo"
              priority
              className="h-auto w-auto max-h-12 object-contain hidden md:block"
            />
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
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-4 rounded-sm text-primary-950 hover:text-primary-950 relative z-50"
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
            className="fixed inset-0 bg-secondary-50 z-40 md:hidden"
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
                  <div
                    key={index}
                    className="py-4 border-t border-secondary-200"
                  >
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
