import AccordionGroup from '@/components/reusable-ui/AccordionGroup';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import Woman1 from '../../../../public/images/home/sectionPresentation/woman.jpg';

const SectionQuestions = () => {
  return (
    <SectionWrapper background="bg-secondary-100">
      <TitleSection>Les questions fréquentes de nos clients</TitleSection>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center relative">
        {/* Main Content - Accordion */}
        <div className="lg:col-span-3">
          <AccordionGroup />
        </div>

        {/* Right Side - Single Image */}
        <div className="hidden lg:block lg:col-span-2 ">
          <div className="overflow-hidden rounded">
            <Image
              src={Woman1}
              alt="Cliente satisfaite du traitement"
              className="w-full h-[430px] object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start">
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
