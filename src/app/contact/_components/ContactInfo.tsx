import SocialLinks from '@/components/reusable-ui/SocialLinks';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Adresse',
      value: '123 Rue de la Paix\nBoulogne-sur-Mer, 62200',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Téléphone',
      value: '+33 21 00 11 90',
      href: 'tel:+33210011190',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'info@apolline.com',
      href: 'mailto:info@apolline.com',
    },
  ];

  return (
    <div className="flex flex-col border border-secondary-100 flex-1 rounded-sm p-8 h-full min-h-[400px]">
      {/* Contact Details */}
      <div className="space-y-8 flex-1">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
              <div className="text-primary-950">{detail.icon}</div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-primary-950 mb-1">
                {detail.label}
              </h4>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-secondary-700 hover:text-primary-950 transition-colors whitespace-pre-line block"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-secondary-700 whitespace-pre-line">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-secondary-200 my-8"></div>

      {/* Social Links */}
      <div className="space-y-4">
        <h4 className="font-medium text-primary-950">Suivez-nous</h4>
        <SocialLinks dark />
      </div>
    </div>
  );
};

export default ContactInfo;
