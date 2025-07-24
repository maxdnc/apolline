import CardImage from '@/components/reusable-ui/CardImage';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import microPeeling from '../../../../public/images/home/micropelling.png';
import faceCare from '../../../../public/images/home/faceCare.png';

const SectionServices = () => {
  return (
    <SectionWrapper background="bg-secondary-100">
      <TitleSection>Nos Services</TitleSection>
      <div className="flex flex-col md:flex-row gap-8 mb-12 ">
        <CardImage
          href="/services/example"
          title="Laser"
          description="En stimulant la cellule, le Microneedling permet d’activer le processus de cicatrisation naturelle et la réduction des rides et ridules."
          imageUrl={microPeeling}
          alt="Description of image"
        />
        <CardImage
          href="/services/example"
          title="Cryolipolyse"
          description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
          imageUrl={faceCare}
          alt="Description of image"
        />
        <CardImage
          href="/services/example"
          title="Hydralift"
          description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
          imageUrl={faceCare}
          alt="Description of image"
        />
        <CardImage
          href="/services/example"
          title="HIFU"
          description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
          imageUrl={faceCare}
          alt="Description of image"
        />
      </div>
    </SectionWrapper>
  );
};
export default SectionServices;
