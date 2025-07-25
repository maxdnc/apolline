import AccordionGroup from '@/components/reusable-ui/AccordionGroup';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';

const SectionQuestions = () => {
  return (
    <SectionWrapper background="bg-secondary-100">
      <TitleSection>Les questions fréquentes de nos clients</TitleSection>
      <AccordionGroup />

      <div className="flex flex-col sm:flex-row  gap-4  mt-8">
        <MainButtonLink href="/contact" size="lg">
          Posez-nous vos questions
        </MainButtonLink>
        <MainButtonLink href="/services" variant="secondary" size="lg">
          Contactez nous
        </MainButtonLink>
      </div>
    </SectionWrapper>
  );
};
export default SectionQuestions;
