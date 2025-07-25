import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';

export const SectionCallToAction = () => {
  return (
    <SectionWrapper background="bg-secondary-100">
      <div className=" rounded-2xl text-center">
        <h3 className="text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] mb-8 leading-tight relative font-thin text-primary-900 text-center text-pretty">
          Prêt à découvrir nos soins ?
        </h3>
        <p className="text-balance mb-8  mx-auto max-w-3xl ">
          Le Centre Esthétique et Laser cherche à être proche de ses patients en
          proposant un panel de nouvelles technologies laser afin de satisfaire
          leurs attentes sans passer par la case chirurgie
        </p>
        <div className="flex flex-col mx-auto max-w-sm sm:max-w-none sm:flex-row gap-4 justify-center">
          <MainButtonLink href="/" size="lg" variant="secondary">
            Rendez-vous en ligne
          </MainButtonLink>
          <MainButtonLink href="/" size="lg" variant="primary">
            Contactez-nous
          </MainButtonLink>
        </div>
      </div>
    </SectionWrapper>
  );
};
