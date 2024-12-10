import { ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  href: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  alt: string;
}

const CardImage = ({ href, title, description, imageUrl, alt }: CardProps) => {
  return (
    <Link
      href={href}
      className="group relative block aspect-[3/4] overflow-hidden rounded-lg w-full max-h-96"
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        placeholder="blur"
        className="object-cover duration-300 group-hover:scale-105 transition-all  group-hover:blur "
      />

      <div className="absolute  inset-0 bg-gradient-to-t from-black/100 to-black/30 " />

      <div className="absolute h-full p-12 text-white flex flex-col justify-between text-pretty">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="mb-4 opacity-90">{description}</p>
        </div>
        <span className="inline-flex items-center text-lg font-bold text-white  transition-colors ">
          En savoir plus
          <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </span>
      </div>
    </Link>
  );
};

export default CardImage;
