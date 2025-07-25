import CardImage from '@/components/reusable-ui/CardImage';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import microPeeling from '../../../../public/images/home/micropelling.png';
import HIFU from '../../../../public/images/home/hifu.jpg';
import HYDRALIFT from '../../../../public/images/home/hydralift.png';
import CRYOLIFT from '../../../../public/images/home/cryolift.png';

const SectionServices = () => {
  return (
    <SectionWrapper>
      <TitleSection>Nos Services</TitleSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
        <CardImage
          href="/services/laser"
          title="Laser"
          description="Éliminez durablement les poils et révélez une peau lisse grâce à la technologie laser 4D."
          imageUrl={microPeeling}
          alt="Épilation laser définitive"
        />

        <CardImage
          href="/services/cryolipolyse"
          title="Cryolipolyse"
          description="Affinez votre silhouette sans chirurgie grâce à l’action du froid sur les graisses."
          imageUrl={CRYOLIFT}
          alt="Cryolipolyse ventre et hanches"
        />

        <CardImage
          href="/services/hydralift"
          title="Hydralift"
          description="Un soin complet pour hydrater, exfolier et redonner éclat et fermeté à votre peau."
          imageUrl={HYDRALIFT}
          alt="Hydratation et éclat du visage"
        />

        <CardImage
          href="/services/HIFU"
          title="HIFU"
          description="Un lifting sans chirurgie pour raffermir, lisser et rajeunir votre visage."
          imageUrl={HIFU}
          alt="Lifting non invasif visage"
        />
      </div>
    </SectionWrapper>
  );
};
export default SectionServices;
