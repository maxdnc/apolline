import Accordion from '@/components/reusable-ui/Accordion';
import CardImage from '@/components/reusable-ui/CardImage';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';

import microPeeling from '../../public/images/home/micropelling.png';
import faceCare from '../../public/images/home/faceCare.png';
import AccordionGroup from '@/components/reusable-ui/AccordionGroup';
import SectionIntro from './(acceuil)/_components/SectionIntro';
import SectionPresentation from './(acceuil)/_components/SectionPresentation';
import TitleSection from '@/components/reusable-ui/TitleSection';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';

export default function Acceuil() {
  return (
    <>
      <SectionIntro />
      <SectionPresentation />

      <SectionWrapper background="bg-slate-100">
        <TitleSection>Nos Services</TitleSection>
        <div className="flex flex-col md:flex-row  gap-16 mb-12 ">
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
          <CardImage
            href="/services/example"
            title="
Radiofréquence visage et cou​"
            description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
            imageUrl={faceCare}
            alt="Description of image"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <TitleSection>Les questions fréquentes de nos clients</TitleSection>
        <AccordionGroup />

        <div className="flex flex-col sm:flex-row  gap-4  mt-8">
          <MainButtonLink href="/contact" size="lg">
            Prendre rendez-vous
          </MainButtonLink>
          <MainButtonLink href="/services" variant="outline" size="lg">
            En savoir plus
          </MainButtonLink>
        </div>
      </SectionWrapper>
    </>
  );
}
