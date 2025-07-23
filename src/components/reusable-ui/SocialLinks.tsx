import { socialLinks } from '@/config/footerItems';
import Link from 'next/link';

interface SocialLinksProps {
  dark?: boolean;
}

const SocialLinks = ({ dark = false }: SocialLinksProps) => {
  return (
    <div className="flex gap-4 ">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          className={`${
            dark
              ? 'text-primary-900 hover:text-slate-500'
              : 'text-secondary-50 hover:text-secondary-50'
          } transition-colors duration-200`}
        >
          <social.icon className="w-5 h-5" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
