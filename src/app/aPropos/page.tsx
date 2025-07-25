import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';

// Import your images here - update these paths to match your actual image imports
import AliBusinessWoman from '../../../public/images/about/AliBusinessWoman.jpg';
import AlissonProfil from '../../../public/images/about/AliProfil.jpg';
import AliWorking from '../../../public/images/about/AliWorking.png';

const page = () => {
  return (
    <>
      <SectionWrapper>
        <TitleSection>À propos de Maison Apolline</TitleSection>
        <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
          <div className="lg:w-2/3 p-4">
            <p className="text-pretty mb-6">
              Bienvenue à Maison Apolline, fondée en 2025 par Alisson, une
              ancienne infirmière passionnée de soin et d'attention. Elle a créé
              ce lieu unique pour que chacun puisse se sentir écouté, choyé et
              en confiance.
            </p>
            <p className="text-pretty mb-6">
              À Maison Apolline, nous proposons des soins personnalisés et des
              produits d'exception, à base d'ingrédients naturels et respectueux
              de l'environnement. Offrez-vous un moment de sérénité, parce que
              vous le méritez.
            </p>

            <p className="text-pretty mb-4">
              Forte de son expérience en milieu médical, Alisson a voulu créer
              un espace où la rigueur professionnelle rencontre la douceur d'un
              cocon bien-être.
            </p>
            <p className="text-pretty">
              Chaque soin est pensé comme un moment privilégié, où votre confort
              et votre satisfaction sont nos priorités absolues.
            </p>
          </div>

          {/* Simple image on the right */}
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="relative w-80 h-96 rounded-sm overflow-hidden shadow">
              <Image
                src={AlissonProfil}
                alt="Alisson, fondatrice de Maison Apolline"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="bg-secondary-100">
        <TitleSection>Nos engagements</TitleSection>
        <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
          {/* Images on the left for second section */}
          <div className="lg:w-1/3 w-full flex flex-col gap-4">
            <div className="relative w-full h-48 rounded-sm overflow-hidden shadow-lg">
              <Image
                src={AliBusinessWoman}
                alt="Professionnalisme à Maison Apolline"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-sm overflow-hidden shadow-lg">
              <Image
                src={AliWorking}
                alt="Soins professionnels à Maison Apolline"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-8 p-4">
            <p className="text-pretty">
              Chez Maison Apolline, nous sommes fiers de vous offrir des soins à
              la pointe de la technologie pour révéler votre beauté naturelle.
              Nos engagements se traduisent par :
            </p>
            <ul className="list-disc pl-6 text-pretty">
              <li>
                Utilisation de machines de dernière génération, notamment pour
                les soins au laser, la photorajeunissement et les traitements de
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
                Une approche sécurisée et respectueuse, garantissant votre
                confort tout au long des traitements.
              </li>
            </ul>
            <p className="text-pretty">
              En associant science, nature et technologie, nous vous promettons
              une expérience unique pour prendre soin de vous en toute sérénité.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default page;
