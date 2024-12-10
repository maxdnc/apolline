'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface AccordionProps {
  label: string;
  content: string | string[];
  id?: string;
}

const Accordion = ({ label, content, id = 'accordion' }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion();
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul
          className={`text-black text-xs md:text-lg transition-opacity duration-400 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          role="region"
        >
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return (
      <p
        className={`text-black text-xs md:text-lg transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {content}
      </p>
    );
  };

  return (
    <div className="w-full border rounded-md">
      <h3>
        <button
          type="button"
          className="w-full bg-primary flex justify-between gap-2 items-center p-2.5 md:p-6 rounded-lg cursor-pointer"
          onClick={toggleAccordion}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <span className="text-slate-800 md:text-2xl text-left font-bold">
            {label}
          </span>
          <span
            className={`transition-transform duration-300  ease-[cubic-bezier(0.83, 0, 0.17, 1)] ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          >
            <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-header`}
        className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.83, 0, 0.17, 1)] ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div
          ref={contentRef}
          className="overflow-hidden transition-[max-height] duration-[400ms] ease-[cubic-bezier(0.83, 0, 0.17, 1)]"
        >
          <div
            className={`p-5 rounded-b-lg transition-opacity duration-400 ease-in delay-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
