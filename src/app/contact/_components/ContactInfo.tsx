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
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'info@apolline.com',
    },
  ];
  return (
    <div className="flex flex-col gap-8 bg-secondary-100 flex-1 rounded p-8 ">
      <div className="flex flex-col justify-between mb-8 ">
        <div className="space-y-7 ">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-primary-900 flex-shrink-0 ">
                {detail.icon}
              </div>

              <div className="flex-1">
                <p className="mt-1 text-primary-950 ">{detail.label} : </p>
                <p className="mt-1 text-slate-600 whitespace-pre-line">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto ml-9">
        <p className=" text-slate-600 mb-4">Reseaux : </p>
        <SocialLinks dark />
      </div>
    </div>
  );
};
export default ContactInfo;
