import Accordion from '@/components/reusable-ui/Accordion';
import CardImage from '@/components/reusable-ui/CardImage';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';

import microPeeling from '../../public/images/home/micropelling.png';
import faceCare from '../../public/images/home/faceCare.png';
import AccordionGroup from '@/components/reusable-ui/AccordionGroup';
import SectionIntro from './(acceuil)/_components/SectionIntro';

export default function Acceuil() {
  return (
    <>
      <SectionIntro />
      <div className="flex flex-col gap-4 pb-16">
        <div className="p-8 flex flex-col gap-8 w-full max-w-[1120px] mx-auto">
          <div className="flex flex-col gap-2">
            <span className="text-lg ">FAQ</span>
            <h3 className="text-4xl font-semibold ">
              Les questions fréquentes de nos clients
            </h3>
          </div>
          <AccordionGroup />

          <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center max-w-lg">
            <MainButtonLink href="/contact" size="lg">
              Prendre rendez-vous
            </MainButtonLink>
            <MainButtonLink href="/services" variant="outline" size="lg">
              En savoir plus
            </MainButtonLink>
          </div>

          <div className="flex flex-col md:flex-row  gap-16 ">
            <CardImage
              href="/services/example"
              title="
Microneedling"
              description="En stimulant la cellule, le Microneedling permet d’activer le processus de cicatrisation naturelle et la réduction des rides et ridules."
              imageUrl={microPeeling}
              alt="Description of image"
            />
            <CardImage
              href="/services/example"
              title="
Radiofréquence visage et cou​"
              description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
              imageUrl={faceCare}
              alt="Description of image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
