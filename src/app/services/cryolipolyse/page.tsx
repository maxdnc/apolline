'use client';
import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import { useState } from 'react';
import Accordion from '@/components/reusable-ui/Accordion';

// Import your images here - update these paths to match your actual image imports
import CryoImage1 from '../../../../public/images/services/cryolipolyse/cryoA.png';
import CryoImage2 from '../../../../public/images/services/cryolipolyse/cryoB.png';

const CryolipolysePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cryoFaqData = [
    {
      label: 'Combien de séances faut-il pour voir les résultats ?',
      content:
        "Les premiers résultats apparaissent généralement entre 4 et 6 semaines après la séance. Selon la zone traitée et le profil du client, 1 à 3 séances peuvent être nécessaires pour un résultat optimal. Chaque séance doit être espacée de 6 à 8 semaines pour laisser le temps au corps d'éliminer les cellules graisseuses détruites.",
    },
    {
      label: 'Est-ce que le traitement est douloureux ?',
      content:
        'Non, le traitement est indolore. Vous pourriez ressentir une légère sensation de succion ou de froid au début de la séance, mais celle-ci disparaît rapidement une fois la zone engourdie.',
    },
    {
      label: 'Comment se déroule une séance de cryolipolyse ?',
      content:
        'Une séance dure environ 60 minutes. Après une consultation personnalisée, la zone à traiter est aspirée dans un applicateur spécifique, puis refroidie à une température négative. À la fin de la séance, un massage peut être effectué pour relancer la circulation et optimiser les résultats.',
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
              Cryolipolyse
            </div>

            <TitleSection>
              Redessinez votre silhouette naturellement, sans recours à la
              chirurgie
            </TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                La cryolipolyse permet de traiter efficacement les zones
                localisées de stockage graisseux, telles que le ventre, les
                hanches, les cuisses, les bras ou le double menton.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                Le traitement par cryolipolyse ne nécessite{' '}
                <strong className="text-primary-950">
                  aucune éviction sociale
                </strong>{' '}
                ni période de repos. Les patients peuvent reprendre leurs
                activités quotidiennes immédiatement après la séance, sans gêne
                ni inconfort majeur.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                C'est une alternative efficace aux interventions chirurgicales.
                Le traitement se fait sans aiguilles, sans anesthésie et sans
                interruption d'activité. Il agit en profondeur sur les cellules
                graisseuses tout en préservant les tissus environnants.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative w-full h-[500px] rounded-sm overflow-hidden">
              <Image
                src={CryoImage1}
                alt="Traitement cryolipolyse remodelage silhouette"
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
                src={CryoImage2}
                alt="Résultats cryolipolyse avant après"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
            <TitleSection>Une méthode personnalisée et adaptée</TitleSection>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Elle s'adapte à chaque morphologie et à chaque objectif grâce à
                une variété d'applicateurs et à des paramètres de traitement
                ajustables.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Traitement non invasif
                  </h4>
                  <p className="text-secondary-700">
                    Sans aiguilles, sans anesthésie et sans interruption
                    d'activité. Reprise immédiate des activités quotidiennes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Action ciblée
                  </h4>
                  <p className="text-secondary-700">
                    Traite spécifiquement les zones de stockage graisseux :
                    ventre, hanches, cuisses, bras, double menton.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Sécurité optimale
                  </h4>
                  <p className="text-secondary-700">
                    Agit en profondeur sur les cellules graisseuses tout en
                    préservant les tissus environnants.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-950 mb-2">
                    Approche personnalisée
                  </h4>
                  <p className="text-secondary-700">
                    Variété d'applicateurs et paramètres ajustables selon votre
                    morphologie et vos objectifs.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-sm p-6 border-l-4 border-primary-950">
                <p className="text-secondary-800 font-medium">
                  Un diagnostic personnalisé permet de proposer un protocole
                  adapté à chaque morphologie et objectif.
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
            {cryoFaqData.map((item, index) => (
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
            Redessinez votre silhouette naturellement
          </h3>
          <p className="text-primary-950 mb-8 max-w-2xl mx-auto">
            Découvrez comment la cryolipolyse peut vous aider à atteindre vos
            objectifs silhouette sans chirurgie ni éviction sociale.
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

export default CryolipolysePage;
