import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';

import AliBusinessWoman from '../../../public/images/about/AliBusinessWoman.jpg';
import AlissonProfil from '../../../public/images/about/AliProfil.jpg';
import AliWorking from '../../../public/images/about/AliWorking.png';

const page = () => {
  return (
    <>
      {/* First Section - About Maison Apolline */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center mb-8">
          <div className="lg:col-span-3 space-y-6">
            <TitleSection>À propos de Maison Apolline</TitleSection>
            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Bienvenue à{' '}
                <strong className="text-primary-950">Maison Apolline</strong>,
                fondée en 2025 par Alisson, une ancienne infirmière passionnée
                de soin et d'attention. Elle a créé ce lieu unique pour que
                chacun puisse se sentir écouté, choyé et en confiance.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                À Maison Apolline, nous proposons des soins personnalisés et des
                produits d'exception, à base d'ingrédients naturels et
                respectueux de l'environnement. Offrez-vous un moment de
                sérénité, parce que vous le méritez.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Forte de son expérience en milieu médical, Alisson a voulu créer
                un espace où la rigueur professionnelle rencontre la douceur
                d'un cocon bien-être.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Chaque soin est pensé comme un moment privilégié, où votre
                confort et votre satisfaction sont nos priorités absolues.
              </p>
            </div>
          </div>

          {/* Minimalist image section */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-sm overflow-hidden">
                <Image
                  src={AlissonProfil}
                  alt="Alisson, fondatrice de Maison Apolline"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-sm overflow-hidden border-4 border-white">
                <Image
                  src={AliWorking}
                  alt="Alisson au travail"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Second Section - Our Commitments */}
      <SectionWrapper background="bg-secondary-100">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row lg:flex-col  sm:items-center">
              {/* Image */}
              <div className="relative w-full h-[300px] rounded-sm overflow-hidden">
                <Image
                  src={AliBusinessWoman}
                  alt="Professionnalisme à Maison Apolline"
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>

              {/* Bloc 2025 / 100% */}
              <div className="bg-secondary-50 rounded-sm p-6 lg:w-full lg:h-auto flex items-stretch sm:h-[300px]">
                <div className="grid grid-cols-2 gap-4 text-center sm:flex sm:flex-col justify-evenly sm:items-stretch w-full lg:flex-row">
                  <div>
                    <div className="text-2xl font-bold text-primary-950">
                      2025
                    </div>
                    <div className="text-sm text-secondary-600">Création</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-950">
                      100%
                    </div>
                    <div className="text-sm text-secondary-600">Naturel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
            <TitleSection>Nos engagements</TitleSection>
            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Chez Maison Apolline, nous sommes fiers de vous offrir des soins
                à la pointe de la technologie pour révéler votre beauté
                naturelle. Nos engagements se traduisent par :
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Technologie de pointe',
                    text: 'Machines de dernière génération pour les soins laser, photorajeunissement et remodelage corporel.',
                  },
                  {
                    title: 'Soins personnalisés',
                    text: 'Protocoles adaptés à chaque type de peau et à vos besoins spécifiques.',
                  },
                  {
                    title: 'Résultats durables',
                    text: 'Innovation technologique et expertise humaine pour des résultats visibles.',
                  },
                  {
                    title: 'Approche sécurisée',
                    text: 'Traitements respectueux garantissant votre confort en toute sérénité.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-secondary-50 rounded-sm p-5">
                    <div className="flex items-start space-x-3">
                      <div>
                        <h4 className="font-semibold text-primary-950 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-secondary-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary-50 rounded-sm p-6 border-l-4 border-primary-950">
                <p className="text-secondary-800 font-medium">
                  En associant science, nature et technologie, nous vous
                  promettons une expérience unique pour prendre soin de vous en
                  toute sérénité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default page;
