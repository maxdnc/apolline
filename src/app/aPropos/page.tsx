import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import { BlobImagesContainer } from './_components/BlobImagesContainer';

const page = () => {
  return (
    <>
      <SectionWrapper>
        <TitleSection>À propos de Maison Apolline</TitleSection>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="lg:w-1/3 p-4">
            <p className="text-pretty mb-4">
              Bienvenue à Maison Apolline, fondée en 2025 par Alisson, une
              ancienne infirmière passionnée de soin et d'attention. Elle a créé
              ce lieu unique pour que chacun puisse se sentir écouté, choyé et
              en confiance.
            </p>
            <p className="text-pretty">
              À Maison Apolline, nous proposons des soins personnalisés et des
              produits d'exception, à base d'ingrédients naturels et respectueux
              de l'environnement. Offrez-vous un moment de sérénité, parce que
              vous le méritez.
            </p>
          </div>

          {/* Mobile: Simple stacked layout */}
          <div className="lg:hidden">
            <BlobImagesContainer />
          </div>

          {/* Desktop: Absolute positioned blobs */}
          <div className="hidden lg:block lg:w-2/3 relative h-[50vh] lg:h-auto min-h-[400px]">
            <BlobImagesContainer />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="bg-secondary-100">
        <TitleSection>Nos engagements</TitleSection>
        <div className="flex flex-col gap-8 w-full p-4">
          <p className="text-pretty">
            Chez Maison Apolline, nous sommes fiers de vous offrir des soins à
            la pointe de la technologie pour révéler votre beauté naturelle. Nos
            engagements se traduisent par :
          </p>
          <ul className="list-disc pl-6 text-pretty">
            <li>
              Utilisation de machines de dernière génération, notamment pour les
              soins au laser, la photorajeunissement et les traitements de
              remodelage corporel.
            </li>
            <li>
              Des protocoles de soin personnalisés, adaptés à chaque type de
              peau et à vos besoins spécifiques.
            </li>
            <li>
              Des résultats visibles et durables grâce à une combinaison
              d'innovation technologique et d'expertise humaine.
            </li>
            <li>
              Une approche sécurisée et respectueuse, garantissant votre confort
              tout au long des traitements.
            </li>
          </ul>
          <p className="text-pretty">
            En associant science, nature et technologie, nous vous promettons
            une expérience unique pour prendre soin de vous en toute sérénité.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default page;
