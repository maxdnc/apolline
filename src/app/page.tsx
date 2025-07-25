import SectionIntro from './(acceuil)/_components/SectionIntro';
import SectionPresentation from './(acceuil)/_components/SectionPresentation';
import SectionServices from './(acceuil)/_components/SectionServices';
import SectionQuestions from './(acceuil)/_components/SectionQuestions';
import { SectionCallToAction } from './(acceuil)/_components/SectionCallToAction';

export default function Acceuil() {
  return (
    <>
      <SectionIntro />
      <SectionPresentation />
      <SectionCallToAction />
      <SectionServices />
      <SectionQuestions />
    </>
  );
}
