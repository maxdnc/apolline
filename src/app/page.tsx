import Accordion from '@/components/reusable-ui/Accordion';
import CardImage from '@/components/reusable-ui/CardImage';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';

import microPeeling from '../../public/images/home/micropelling.png';
import faceCare from '../../public/images/home/faceCare.png';

export default function Acceuil() {
  return (
    <div className="flex gap-4 py-16">
      <div className="p-8 flex flex-col gap-8 w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-lg ">FAQ</span>
          <h3 className="text-4xl font-semibold ">
            Les questions fréquentes de nos clients
          </h3>
        </div>
        <Accordion
          id="laser-douleur"
          label="Est-ce que le laser fait mal ?"
          content="Notre laser d’épilation définitive est conçu pour offrir une séance sans douleur grâce à sa tête froide. Cette technologie de refroidissement avancée apaise la peau pendant le traitement, minimisant les sensations de chaleur et d’inconfort. Ainsi, vous pouvez profiter des résultats durables de l’épilation au laser tout en bénéficiant d’un maximum de confort."
        />
        <Accordion
          id="laser-ete"
          label="Puis-je faire le laser l’été ?"
          content="Oui, il est possible de faire de l’épilation définitive au laser en été, mais il faut prendre certaines précautions pour protéger votre peau. Il est recommandé d’éviter l’exposition au soleil pendant au moins deux semaines avant et après chaque séance. Utilisez toujours une protection solaire élevée (SPF 50) sur les zones traitées et portez des vêtements couvrants pour minimiser l’exposition directe au soleil. En suivant ces précautions, vous pouvez profiter des bienfaits de l’épilation au laser tout en protégeant votre peau des dommages causés par le soleil."
        />

        <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center max-w-lg">
          <MainButtonLink href="/contact" size="lg">
            Prendre rendez-vous
          </MainButtonLink>
          <MainButtonLink href="/services" variant="outline" size="lg">
            En savoir plus
          </MainButtonLink>
        </div>

        <div className="flex flex-col md:flex-row  gap-16 ">
          <CardImage
            href="/services/example"
            title="
Microneedling"
            description="En stimulant la cellule, le Microneedling permet d’activer le processus de cicatrisation naturelle et la réduction des rides et ridules."
            imageUrl={microPeeling}
            alt="Description of image"
          />
          <CardImage
            href="/services/example"
            title="
Radiofréquence visage et cou​"
            description="Technique esthétique non invasive de rajeunissement de la peau qui donne des résultats très similaires à ceux du lifting chirurgical."
            imageUrl={faceCare}
            alt="Description of image"
          />
        </div>
      </div>
    </div>
  );
}
