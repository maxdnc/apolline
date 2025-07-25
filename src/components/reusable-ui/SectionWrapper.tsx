interface SectionWrapperProps {
  children: React.ReactNode;
  background?: string;
}

export const SectionWrapper = ({
  children,
  background,
}: SectionWrapperProps) => {
  return (
    <section
      className={`py-[60px] px-[40px] lg:px-[70px] lg:py-[120px] ${background ? background : ''}`}
    >
      <div className="max-w-largest mx-auto">{children}</div>
    </section>
  );
};
