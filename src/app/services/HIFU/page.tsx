'use client';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { useState } from 'react';
import Accordion from '@/components/reusable-ui/Accordion';

// Import your images here - update these paths to match your actual image imports
import HifuImage1 from '../../../../public/images/services/hifu/hifuA.png';
import HifuImage2 from '../../../../public/images/services/hifu/hifuB.png';

const HifuPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hifuFaqData = [
    {
      label: 'Combien de temps durent les effets du HIFU ?',
      content:
        "Les résultats du traitement HIFU peuvent durer jusqu'à un an, mais cela peut varier selon le type de peau et le régime de soin suivi.",
    },
    {
      label: 'Est-ce que le traitement HIFU est douloureux ?',
      content:
        "Non, le traitement est conçu pour être confortable. Vous pouvez ressentir une légère sensation de chaleur ou de picotement, mais cela est généralement bien toléré. Aucun temps de récupération n'est nécessaire après la séance.",
    },
    {
      label:
        'Combien de séances de HIFU sont nécessaires pour obtenir des résultats optimaux ?',
      content:
        "La plupart des patients constatent des résultats après une seule séance de HIFU, mais en fonction de vos objectifs de traitement et de l'état de votre peau, plusieurs séances peuvent être recommandées pour des résultats optimaux.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="text-sm font-medium uppercase tracking-wide text-primary-950 mb-4">
              HIFU
            </div>

            <TitleSection>
              Retrouvez un visage plus jeune, sans intervention chirurgicale
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Un lifting non invasif pour le visage, le cou et le décolleté.
                Le HIFU 360 utilise les Ultrasons Focalisés de Haute Intensité
                pour stimuler la production naturelle de collagène, lisser les
                rides et améliorer la fermeté de la peau.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Le HIFU permet de{' '}
                <strong className="text-primary-950">raffermir la peau</strong>,
                de lifter sans chirurgie avec un effet tenseur naturel qui
                redessine les contours du visage sans aucune intervention
                invasive.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Cette méthode non invasive offre des résultats durables et
                progressifs qui peuvent durer plusieurs mois après une séance,
                avec peu ou pas d'effets secondaires et sans temps d'arrêt.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[500px] rounded-sm overflow-hidden">
              <Image
                src={HifuImage1}
                alt="Traitement HIFU lifting non invasif"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper background="bg-secondary-100">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <Image
                src={HifuImage2}
                alt="Résultats HIFU rajeunissement visage"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
            <TitleSection>
              Les promesses du HIFU : fermeté, contours et rajeunissement
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Le HIFU 360 offre un traitement complet pour retrouver une peau
                ferme et des contours redéfinis naturellement.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Raffermir la peau
                  </h4>
                  <p className="text-secondary-700">
                    Tonifie les tissus en profondeur pour une peau plus ferme et
                    plus élastique.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Lifter sans chirurgie
                  </h4>
                  <p className="text-secondary-700">
                    Effet tenseur naturel qui redessine les contours du visage
                    sans aucune intervention invasive.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Réduire les rides et ridules
                  </h4>
                  <p className="text-secondary-700">
                    Stimule la production de collagène pour lisser les rides et
                    améliorer la texture de la peau.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Améliorer l'éclat du teint
                  </h4>
                  <p className="text-secondary-700">
                    Peau visiblement plus lumineuse et revitalisée, adaptée à
                    tous types de peau.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-sm p-6 border-l-4 border-primary-950">
                <p className="text-secondary-800 font-medium">
                  Résultats durables et effets visibles progressifs qui peuvent
                  durer plusieurs mois après une séance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <TitleSection>Questions fréquentes</TitleSection>
          <div className="flex flex-col gap-4 py-8">
            {hifuFaqData.map((item, index) => (
              <Accordion
                key={index}
                label={item.label}
                content={item.content}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="bg-secondary-100">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary-950 mb-4">
            Découvrez le lifting sans chirurgie
          </h3>
          <p className="text-primary-950 mb-8 max-w-2xl mx-auto">
            Retrouvez un visage plus jeune et des contours redéfinis grâce à la
            technologie HIFU 360, sans intervention chirurgicale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MainButtonLink href="/contact" variant="secondary" size="lg">
              Consultation gratuite
            </MainButtonLink>
            <MainButtonLink href="#" variant="primary" size="lg">
              Voir nos tarifs
            </MainButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HifuPage;
