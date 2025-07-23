import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  label: string;
  content: string | string[];
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ label, content, isOpen, onToggle }: AccordionProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="text-black text-xs md:text-lg" role="region">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-black text-xs md:text-lg">{content}</p>;
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className="w-full text-left border rounded-md cursor-pointer"
      aria-expanded={isOpen}
    >
      <div className="w-full bg-primary flex justify-between gap-2 items-center p-3 md:p-6 rounded-lg">
        <h3 className="text-slate-800 md:text-2xl font-bold">{label}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.45, ease: [0.83, 0, 0.17, 1] }}
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
                opacity: {
                  duration: 0.3,
                  delay: 0.2,
                  ease: [0.83, 0, 0.17, 1],
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
                opacity: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
              },
            }}
            className="overflow-hidden"
          >
            <div className="p-5 rounded-b-lg">{renderContent()}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Accordion;
