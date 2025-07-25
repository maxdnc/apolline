import React from 'react';
import Link from 'next/link';
import { footerLinks } from '../../../config/footerItems';
import LinkSection from './LinkSection';
import SocialLinks from '@/components/reusable-ui/SocialLinks';
import Image from 'next/image';
import logoC from '../../../../public/svg/logoC.svg';

const Footer = () => {
  return (
    <footer className="bg-primary-950 border-t">
      <div className="max-w-largest mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-start h-full">
              <Image
                src={logoC}
                alt="maison apoline"
                priority
                className="h-full w-auto max-h-14 object-contain"
              />
            </Link>
          </div>

          {/* Link Sections */}
          <LinkSection title="Navigation" links={footerLinks.navigation} />
          <LinkSection title="Nos services" links={footerLinks.nosServices} />
        </div>

        {/* Copyright and Social */}
        <div className="mt-12 pt-8 border-t text-sm text-secondary-50 flex justify-between">
          <p>
            © {new Date().getFullYear()} Maison Apolline. Tous droits réservés.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
