'use client';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { useState } from 'react';
import Accordion from '@/components/reusable-ui/Accordion';

// Import your images here - update these paths to match your actual image imports
import HydraliftImage1 from '../../../../public/images/services/hydralift/hydraliftA.png';
import HydraliftImage2 from '../../../../public/images/services/hydralift/hydraliftB.png';

const HydraliftPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hydraliftFaqData = [
    {
      label: 'Est-ce que le traitement Hydralift est douloureux ?',
      content:
        "Non, le traitement est totalement indolore et sûr. Grâce à ses technologies avancées comme les ultrasons, la radiofréquence multipolaire et l'hydrajet, il offre un soin confortable et agréable, sans effets secondaires ni temps de récupération.",
    },
    {
      label:
        'Combien de temps dure une séance de Hydra-LIFT et quand puis-je voir les résultats ?',
      content:
        'Une séance typique de Hydra-LIFT dure environ 60 à 90 minutes. Les résultats sont visibles immédiatement après le traitement. Pour des résultats durables, nous recommandons une cure de 3 à 5 séances, avec un entretien mensuel.',
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
              Hydralift
            </div>

            <TitleSection>
              Jeunesse retrouvée avec une hydratation intense
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Le traitement Hydra-Lift est une solution non invasive qui
                combine nettoyage, exfoliation, hydratation et protection de la
                peau.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Il est conçu pour améliorer l'apparence de la peau en réduisant
                les rides, les pores dilatés, l'acné, et l'hyperpigmentation,
                tout en offrant un{' '}
                <strong className="text-primary-950">éclat revitalisé</strong>{' '}
                et une texture lisse.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Grâce à ses technologies avancées comme les ultrasons, la
                radiofréquence multipolaire et l'hydrajet, il offre un soin
                confortable et agréable, sans effets secondaires ni temps de
                récupération.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[500px] rounded-sm overflow-hidden">
              <Image
                src={HydraliftImage1}
                alt="Traitement Hydralift hydratation intensive visage"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Treatment Benefits Section */}
      <SectionWrapper background="bg-secondary-100">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <Image
                src={HydraliftImage2}
                alt="Résultats Hydralift peau éclatante"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
            <TitleSection>
              Un protocole complet en plusieurs étapes
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Le traitement Hydra-Lift combine plusieurs technologies avancées
                pour un soin complet et personnalisé de votre peau.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Nettoyage en profondeur
                  </h4>
                  <p className="text-secondary-700">
                    Élimination des impuretés et cellules mortes pour une peau
                    parfaitement propre.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Exfoliation douce
                  </h4>
                  <p className="text-secondary-700">
                    Pour une peau plus lisse et un teint éclatant.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Extraction sans douleur
                  </h4>
                  <p className="text-secondary-700">
                    Points noirs et comédons éliminés en douceur.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Hydratation intense
                  </h4>
                  <p className="text-secondary-700">
                    Sérum riche en antioxydants et acides hyaluroniques pour une
                    hydratation optimale.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Technologies avancées
                  </h4>
                  <p className="text-secondary-700">
                    Dermalfusion, radiofréquence multipolaire et ultrasons pour
                    des résultats optimaux.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-sm p-6 border-l-4 border-primary-950">
                <p className="text-secondary-800 font-medium">
                  Les résultats sont visibles immédiatement après le traitement.
                  Pour des résultats durables, nous recommandons une cure de 3 à
                  5 séances.
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
            {hydraliftFaqData.map((item, index) => (
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
            Retrouvez une peau éclatante et hydratée
          </h3>
          <p className="text-primary-950 mb-8 max-w-2xl mx-auto">
            Découvrez les bienfaits du traitement Hydra-Lift pour une peau
            visiblement plus jeune et éclatante dès la première séance.
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

export default HydraliftPage;
