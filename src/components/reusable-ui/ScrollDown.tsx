import { ChevronDown } from 'lucide-react';

const ScrollDown = () => {
  return (
    <>
      <ChevronDown size={32} color="white" className="animate-fadeInOut" />
      <ChevronDown
        size={32}
        color="white"
        className="animate-[fadeInOut_2s_0.75s_ease-in-out_infinite] -mt-8"
      />
    </>
  );
};
export default ScrollDown;
