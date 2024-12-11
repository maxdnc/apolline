interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span
        className={`block w-6 h-0.5 rounded bg-gray-800 transition-all
       ${isOpen ? 'animate-hamburger-top-bar' : 'animate-hamburger-top-bar-close'}`}
      />
      <span
        className={`block w-6 h-0.5 rounded bg-gray-800 transition-all duration-200 ease-[cubic-bezier(0.83, 0, 0.17, 1)]
        ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 delay-200'}`}
      />
      <span
        className={`block w-6 h-0.5 rounded bg-gray-800 transition-all
           ${isOpen ? 'animate-hamburger-bottom-bar' : 'animate-hamburger-bottom-bar-close'}`}
      />
    </div>
  );
};
export default HamburgerIcon;
