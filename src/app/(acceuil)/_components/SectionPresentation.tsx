import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import Woman1 from '../../../../public/images/home/sectionPresentation/woman.jpg';
import Woman2 from '../../../../public/images/home/sectionPresentation/woman2.jpg';
import Woman3 from '../../../../public/images/home/sectionPresentation/woman3.jpg';
import Woman4 from '../../../../public/images/home/sectionPresentation/woman4.jpg';
import Woman5 from '../../../../public/images/home/sectionPresentation/woman5.png';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';

const SectionPresentation = () => {
  return (
    <SectionWrapper>
      {/* First Section - Split Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center mb-16 lg:mb-24">
        <div className="space-y-6">
          <TitleSection>
            Centre Esthétique et Traitement Laser à Boulogne Sur Mer
          </TitleSection>
          <div className="space-y-5 text-pretty leading-relaxed">
            <p className="text-lg text-gray-700">
              Situé aux portes de{' '}
              <strong className="text-gray-900">Boulogne Sur Mer</strong>, le
              Centre Esthétique a ouvert ses portes en janvier 2000.
            </p>
            <p className="text-gray-700">
              Cet espace de 160 m², qui comprend 8 salles dédiées au bien-être
              et à la beauté, propose des soins esthétiques uniques pour le
              visage et des techniques de remodelage du corps.
            </p>
            <p className="text-gray-700">
              Nos spécialistes utilisent des machines de dernière technologie
              laser et s'adaptent à l'objectif et aux besoins de chaque patient.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Main large image */}
          <div className="relative overflow-hidden rounded-sm ">
            <Image
              src={Woman1}
              alt="Traitement esthétique professionnel"
              className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
              placeholder="blur"
            />
          </div>

          {/* Floating smaller image */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-sm  border-4 border-white">
            <Image
              src={Woman2}
              alt="Soins du visage spécialisés"
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Second Section - Reversed Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
        {/* Text Content - Right on desktop, first on mobile */}
        <div className="order-1 lg:order-2 space-y-6">
          <TitleSection>
            Découvrez la Médecine Laser à Boulogne Sur Mer
          </TitleSection>
          <div className="space-y-5 text-pretty leading-relaxed">
            <p className="text-lg text-gray-700">
              Le Centre Esthétique et Laser est composé de médecins laseristes
              diplômés, experts dans leur domaine pour vous offrir les meilleurs
              résultats.
            </p>
            <p className="text-gray-700">
              Réalisez un bilan gratuit afin de bien analyser votre attente et
              définir ensemble le protocole de soins le plus adapté à vos
              besoins.
            </p>
            <p className="text-gray-700">
              À l'image du MORPHEUS 8 couplé au Micro Needling, cette machine
              révolutionnaire combine plusieurs technologies pour des résultats
              exceptionnels en matière de rajeunissement cutané.
            </p>
          </div>
        </div>

        {/* Images - Left on desktop, second on mobile */}
        <div className="relative order-2 lg:order-1">
          {/* Stacked layout for variety */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <Image
                src={Woman3}
                alt="Technologie laser avancée"
                className="w-full h-[280px] sm:h-[320px] object-cover"
                placeholder="blur"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-sm ">
                <Image
                  src={Woman4}
                  alt="Équipement médical de pointe"
                  className="w-full h-[180px] sm:h-[200px] object-cover"
                  placeholder="blur"
                />
              </div>

              {/* Decorative element or additional image space */}
              <div className="overflow-hidden rounded-sm ">
                <Image
                  src={Woman5}
                  alt="Équipement médical de pointe"
                  className="w-full h-[180px] sm:h-[200px] object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionPresentation;
