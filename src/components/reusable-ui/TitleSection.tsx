interface TitleSectionProps {
  children: string;
}

const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <h2 className="text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] mb-8 leading-tight pl-6 md:pl-8 relative font-thin text-slate-700 before:content-[''] before:absolute  before:left-0 before:inset-y-1 before:w-1.5 before:bg-slate-700">
      {children}
    </h2>
  );
};
export default TitleSection;
