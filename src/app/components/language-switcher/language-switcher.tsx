import { useState } from 'react';
import "./language-switcher.scss";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('pt'); // 'pt' para português, 'en' para inglês

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button onClick={toggleLanguage}>
      <img src={`/${language === 'pt' ? 'usa-flag.png' : 'brazil-flag.png'}`} alt={language === 'pt' ? 'English' : 'Português'} />
    </button>
  );
};

export default LanguageSwitcher;