'use client';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { useState } from 'react';
import Accordion from '@/components/reusable-ui/Accordion';

// Import your images here - update these paths to match your actual image imports
import LaserImage1 from '../../../../public/images/services/laser/lazerA.png';
import LaserImage2 from '../../../../public/images/services/laser/lazerB.png';

const LaserPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const laserFaqData = [
    {
      label: "Est-ce que l'épilation laser est douloureuse ?",
      content:
        "Le traitement est généralement bien toléré, grâce au système de refroidissement intégré qui minimise toute sensation d'inconfort. Certains patients peuvent ressentir une légère chaleur ou une sensation de picotement, mais cela disparaît rapidement après la séance.",
    },
    {
      label: "Combien de séances d'épilation laser sont nécessaires ?",
      content:
        "Le nombre de séances nécessaires varie en fonction de plusieurs facteurs, y compris la zone du corps traitée, la couleur et la densité des poils, ainsi que le cycle de croissance des poils de l'individu. En général, la plupart des patients nécessitent entre 5 et 8 séances pour obtenir des résultats optimaux.",
    },
    {
      label: "Quels sont les effets secondaires de l'épilation laser ?",
      content:
        "Les effets secondaires de l'épilation laser 4D sont généralement légers et temporaires. On peut parfois observer des rougeurs, un léger gonflement ou une sensibilité au toucher sur les zones traitées. Ces sensations disparaissent normalement en quelques heures ou quelques jours après la séance.",
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
              Épilation Laser
            </div>

            <TitleSection>
              Dites adieu aux poils indésirables et révélez une peau
              parfaitement lisse
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Une solution sûre, durable et non invasive, pensée pour celles
                et ceux qui recherchent efficacité et confort avec l'épilation
                laser définitive.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Le <strong className="text-primary-950">Laser 4D</strong> pour
                l'épilation définitive est une technologie de dernière
                génération qui combine plusieurs longueurs d'onde pour cibler
                efficacement tous types de poils, même les plus fins, sur toutes
                les zones du corps et presque tous les types de peau, y compris
                les plus sensibles.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                L'épilation laser permet une réduction de 80 à 95 % de la
                pilosité sur la zone traitée. Les poils deviennent plus fins,
                plus clairs, parfois semblables à un duvet imperceptible que le
                laser ne détecte plus.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[500px] rounded-sm overflow-hidden">
              <Image
                src={LaserImage1}
                alt="Traitement laser épilation définitive"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Results Section */}
      <SectionWrapper background="bg-secondary-100">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <Image
                src={LaserImage2}
                alt="Résultats épilation laser"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
            <TitleSection>
              Technologie de pointe pour des résultats durables
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Notre technologie Laser 4D utilise plusieurs longueurs d'onde
                pour s'adapter à tous types de poils et de peau, garantissant
                des résultats optimaux avec un confort maximal.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Système de refroidissement intégré
                  </h4>
                  <p className="text-secondary-700">
                    Minimise l'inconfort grâce à une tête froide qui apaise la
                    peau pendant le traitement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Efficacité sur toutes les zones
                  </h4>
                  <p className="text-secondary-700">
                    Traitement possible sur toutes les parties du corps, même
                    les plus sensibles.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Résultats durables
                  </h4>
                  <p className="text-secondary-700">
                    Peau lisse durablement avec un entretien minimal de 1 à 2
                    séances par an.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-sm p-6 border-l-4 border-primary-950">
                <p className="text-secondary-800 font-medium">
                  Le résultat est durablement lisse, avec un entretien ponctuel
                  pour conserver un résultat optimal sur le long terme.
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
            {laserFaqData.map((item, index) => (
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
            Prêt(e) à découvrir l'épilation laser définitive ?
          </h3>
          <p className="text-primary-950 mb-8 max-w-2xl mx-auto">
            Réservez votre consultation gratuite et découvrez comment notre
            technologie laser 4D peut transformer votre routine beauté.
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

export default LaserPage;
