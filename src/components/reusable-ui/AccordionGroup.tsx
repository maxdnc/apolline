'use client';
import { useState } from 'react';
import Accordion from './Accordion';

interface AccordionData {
  label: string;
  content: string | string[];
}

const AccordionGroup = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionData: AccordionData[] = [
    {
      label: 'Est-ce que le laser fait mal ?',
      content:
        "Notre laser d'épilation définitive est conçu pour offrir une séance sans douleur grâce à sa tête froide. Cette technologie de refroidissement avancée apaise la peau pendant le traitement, minimisant les sensations de chaleur et d'inconfort. Ainsi, vous pouvez profiter des résultats durables de l'épilation au laser tout en bénéficiant d'un maximum de confort.",
    },
    {
      label: "Puis-je faire le laser l'été ?",
      content:
        "Oui, il est possible de faire de l'épilation définitive au laser en été, mais il faut prendre certaines précautions pour protéger votre peau. Il est recommandé d'éviter l'exposition au soleil pendant au moins deux semaines avant et après chaque séance. Utilisez toujours une protection solaire élevée (SPF 50) sur les zones traitées et portez des vêtements couvrants pour minimiser l'exposition directe au soleil. En suivant ces précautions, vous pouvez profiter des bienfaits de l'épilation au laser tout en protégeant votre peau des dommages causés par le soleil.",
    },
    {
      label: "Puis-je faire le laser l'été ?",
      content: ['oui', 'baguette', 'oui oui'],
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 py-8">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          label={item.label}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
