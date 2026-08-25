import { useState, useRef, useEffect } from "react";

type Language = "EN" | "NL";

const languages: Language[] = ["EN", "NL"];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("NL");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    // Add your language switching logic here
    console.log("Selected language:", language);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-1 text-[12px] text-[#111111]"
      >
        <span>{selectedLanguage}</span>

        <span className={`text-[12px] transition-transform duration-200 ${isOpen ? "rotate-180" : "" }`}>
          +
        </span>
      </button>

      {/* Dropdown */}
      <div className={`absolute right-0 top-[calc(100%+8px)] z-50 min-w-[55px] origin-top-right bg-[#f1f0eb] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-200 
      ${ isOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"}`} >
        {languages.map((language) => (
          <button
            key={language}
            type="button"
            onClick={() => handleLanguageChange(language)}
            className={`block w-full px-3 py-2 text-left text-[12px] transition-colors hover:bg-[#2b0505] hover:text-white ${
              selectedLanguage === language
                ? "text-[#5b1111]"
                : "text-[#222222]"
            }`}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;