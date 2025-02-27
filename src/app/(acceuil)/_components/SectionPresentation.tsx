import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import Woman1 from '../../../../public/images/home/sectionPresentation/woman.jpg';
import Woman2 from '../../../../public/images/home/sectionPresentation/woman2.jpg';
import Woman3 from '../../../../public/images/home/sectionPresentation/woman3.jpg';
import Woman4 from '../../../../public/images/home/sectionPresentation/woman4.jpg';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';

const SectionPresentation = () => {
  return (
    <SectionWrapper>
      <TitleSection>
        Centre Esthétique et Traitement Laser à Boulogne Sur Mer
      </TitleSection>
      <p className="text-pretty">
        Situé aux portes de <strong>Boulogne Sur Mer</strong>, le Centre
        Esthétique a ouvert ses portes en janvier 2000. Cet espace de 160 m2,
        qui comprend 8 salles dédiées au bien-être et à la beauté, propose des
        soins esthétiques uniques pour le visage, des techniques de remodelage
        du corps mais aussi des séances de laser grâce à des machines de
        dernière technologie à la pointe. Professionnels et performants, les
        spécialistes du domaine esthétique du cabinet s’adaptent à l’objectif et
        aux besoins de chaque patient.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-largest mx-auto py-10">
        <div className="aspect-square">
          <Image
            src={Woman1}
            alt="Description 1"
            className="w-full h-full object-cover rounded"
            placeholder="blur"
          />
        </div>
        <div className="aspect-square">
          <Image
            src={Woman2}
            alt="Description 2"
            className="w-full h-full object-cover rounded"
            placeholder="blur"
          />
        </div>
        <div className="aspect-square ">
          <Image
            src={Woman3}
            alt="Description 3"
            className="w-full h-full object-cover rounded"
            placeholder="blur"
          />
        </div>
        <div className="aspect-square">
          <Image
            src={Woman4}
            alt="Description 4"
            className="w-full h-full object-cover rounded"
            placeholder="blur"
          />
        </div>
      </div>

      <TitleSection>
        Découvrez la Médecine Laser à Boulogne Sur Mer
      </TitleSection>
      <p className="text-pretty">
        Le Centre Esthétique et Laser est composé de médecins laseristes
        diplômés. Bénéficiez d'un accompagnement d'expert pour le traitement du
        détatouage laser, du photorajeunissement, de l’épilation laser, de la
        radio-fréquence Micro-Needling (Morpheus 8), du HIFU, la Blépharoplastie
        (PLEXR), du traitement des cicatrices ou encore du laser vasculaire.
        Réalisez un bilan gratuit afin de bien analyser votre attente ! À
        l’issue de celui-ci, un devis vous est remis. Seuls nos médecins experts
        peuvent connaître l’anatomie d’un visage et l’évolution de votre peau.
        Attachés à l’innovation et au plus proche de la science qui ne cesse de
        progresser, nous utilisons des techniques de médecine laser de pointe. À
        l'image du du MORPHEUS 8 couplé au Micro Needling, cette machine unique
        est titulaire du Prix de l’innovation en médecine esthétique laser parmi
        toutes les machines créées en 2020. Elle traite les cicatrices d’acné et
        les vergetures ainsi que le relâchement de la peau. Le Centre Esthétique
        et Laser cherche à être proche de ses patients en proposant un panel de
        nouvelles technologies laser afin de satisfaire leurs attentes sans
        passer par la case chirurgie !
      </p>

      <div className="flex flex-col mx-auto max-w-sm sm:max-w-none sm:flex-row gap-4 justify-center pt-8">
        <MainButtonLink href="/" size="lg" variant="secondary">
          Rendez-vous en ligne
        </MainButtonLink>
        <MainButtonLink href="/" size="lg" variant="primary">
          Contactez-nous
        </MainButtonLink>
      </div>
    </SectionWrapper>
  );
};
export default SectionPresentation;
