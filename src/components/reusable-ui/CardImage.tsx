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
      className="group relative block aspect-[4/5] sm:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-sm w-full hover:shadow-xl transition-all duration-300"
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        placeholder="blur"
        className="object-cover blur-[1px] duration-300 group-hover:scale-105 transition-all group-hover:blur-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />

      <div className="absolute inset-0 p-4 sm:p-5 xl:p-6 text-secondary-100 group-hover:text-secondary-50 flex flex-col justify-between text-pretty">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="text-xl sm:text-2xl xl:text-xl font-bold leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base bold xl:text-sm opacity-90 line-clamp-4 sm:line-clamp-3 text-secondary-50 text-pretty">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <span className="inline-flex items-center text-sm sm:text-base xl:text-sm font-bold text-secondary-100 group-hover:text-secondary-50 transition-colors">
            En savoir plus
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 xl:w-4 xl:h-4 group-hover:translate-x-2 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
