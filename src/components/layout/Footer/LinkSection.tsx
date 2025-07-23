import Link from 'next/link';
import { FooterLink } from '@/types/footerNavigation';

export const LinkSection = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h3 className="font-semibold text-secondary-50 mb-4">{title}</h3>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="block text-sm text-secondary-50 hover:text-secondary-50 mb-2"
      >
        {link.title}
      </Link>
    ))}
  </div>
);

export default LinkSection;
