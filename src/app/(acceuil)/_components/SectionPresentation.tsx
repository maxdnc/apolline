import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import Woman1 from '../../../../public/images/home/sectionPresentation/woman.jpg';
import Woman2 from '../../../../public/images/home/sectionPresentation/woman2.jpg';
import Woman3 from '../../../../public/images/home/sectionPresentation/woman3.jpg';
import Woman4 from '../../../../public/images/home/sectionPresentation/woman4.jpg';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';

const SectionPresentation = () => {
  return (
    <SectionWrapper>
      {/* First Section - Split Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center ">
        <div>
          <TitleSection>
            Centre Esthétique et Traitement Laser à Boulogne Sur Mer
          </TitleSection>
          <div className="space-y-4 text-pretty">
            <p>
              Situé aux portes de <strong>Boulogne Sur Mer</strong>, le Centre
              Esthétique a ouvert ses portes en janvier 2000.
            </p>
            <p>
              Cet espace de 160 m², qui comprend 8 salles dédiées au bien-être
              et à la beauté, propose des soins esthétiques uniques pour le
              visage et des techniques de remodelage du corps.
            </p>
            <p>
              Nos spécialistes utilisent des machines de dernière technologie
              laser et s'adaptent à l'objectif et aux besoins de chaque patient.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-largest mx-auto">
          <div className="aspect-square">
            <Image
              src={Woman1}
              alt="Description 1"
              className="w-full h-full object-cover rounded-sm"
              placeholder="blur"
            />
          </div>
          <div className="aspect-square">
            <Image
              src={Woman2}
              alt="Description 2"
              className="w-full h-full object-cover rounded-sm"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start pt-[60px] lg:pt-[120px]">
        {/* Texte - affiché en premier sur mobile */}
        <div className="order-1 lg:order-2">
          <TitleSection>
            Découvrez la Médecine Laser à Boulogne Sur Mer
          </TitleSection>
          <div className="space-y-4 text-pretty">
            <p>
              Le Centre Esthétique et Laser est composé de médecins laseristes
              diplômés...
            </p>
            <p>
              Réalisez un bilan gratuit afin de bien analyser votre attente !...
            </p>
            <p>
              À l'image du MORPHEUS 8 couplé au Micro Needling, cette machine...
            </p>
          </div>
        </div>

        {/* Images - affichées après le texte sur mobile */}
        <div className="grid grid-cols-2 gap-4 max-w-largest mx-auto order-2 lg:order-1">
          <div>
            <Image
              src={Woman3}
              alt="Description 3"
              className="w-full h-full object-cover rounded-sm"
              placeholder="blur"
            />
          </div>
          <div>
            <Image
              src={Woman4}
              alt="Description 4"
              className="w-full h-full object-cover rounded-sm"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
    </SectionWrapper>
  );
};

export default SectionPresentation;
