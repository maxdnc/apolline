import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import SectionHoraires from './_components/SectionHoraires';
import GoogleMap from './_components/GoogleMap';
import ContactInfo from './_components/ContactInfo';

const page = () => {
  return (
    <>
      <SectionWrapper>
        <TitleSection>Nos Coordonées</TitleSection>

        <div className="flex flex-col gap-8 lg:flex-row ">
          <GoogleMap />
          <ContactInfo />
        </div>
      </SectionWrapper>
      <SectionHoraires />

      <SectionWrapper>
        <h2 className="text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] mb-8 leading-tight text-center relative font-thin text-primary-900">
          Contactez-nous
        </h2>
        <p className="text-pretty text-center ">
          Nous sommes là pour répondre à toutes vos questions sur nos services
          et pour vous aider à programmer votre prochain rendez-vous.
        </p>
        <div className="mt-auto">
          <div className="flex flex-col md:flex-row  mx-auto max-w-sm sm:max-w-none  gap-4 justify-center mt-12 lg:mt-16 ">
            <MainButtonLink href="/" size="lg" variant="secondary">
              Rendez-vous en ligne
            </MainButtonLink>
            <MainButtonLink href="/" size="lg" variant="primary">
              Contactez-nous
            </MainButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
export default page;
