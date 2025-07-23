import { SectionWrapper } from '@/components/reusable-ui/SectionWrapper';
import TitleSection from '@/components/reusable-ui/TitleSection';
import Image from 'next/image';
import ScedulePicture from '../../../../public/images/contact/schedulePicture.png';

const SectionHoraires = () => {
  return (
    <SectionWrapper background="bg-secondary-100">
      <TitleSection>Horaires d&apos;ouverture</TitleSection>
      <div className="flex flex-col lg:flex-row gap-8 ">
        <div className="flex-1 w-full lg:w-1/3">
          <table className="">
            <tbody className="divide-y divide-secondary-200">
              <tr className="bg-secondary-50">
                <td className="py-5 px-3 w-full">Lundi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50/50">
                <td className="py-5 px-3 w-full">Mardi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50">
                <td className="py-5 px-3 w-full">Mercredi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50/50">
                <td className="py-5 px-3 w-full">Jeudi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50">
                <td className="py-5 px-3 w-full">Vendredi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50/50">
                <td className="py-5 px-3 w-full">Samedi</td>
                <td className="py-5 px-3 whitespace-nowrap">09:00 – 20:00</td>
              </tr>
              <tr className="bg-secondary-50">
                <td className="py-5 px-3 w-full">Dimanche</td>
                <td className="py-5 px-3 whitespace-nowrap">Fermée</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" w-full lg:w-2/3">
          <div className="relative h-64 lg:h-full ">
            <Image
              src={ScedulePicture}
              alt="jeune femme lazer"
              fill
              className="object-cover object-[50%_80%] rounded shadow lg:h-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default SectionHoraires;
