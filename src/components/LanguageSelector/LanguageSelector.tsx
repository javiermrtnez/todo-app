import { useRef, useState } from 'react';
import { CheckIcon, GlobeIcon } from '../Icons/Icons';
import SCLanguageSelector from './LanguageSelector.style';
import useClickOutside from '../../hooks/useClickOutside';
import { useTranslation } from 'react-i18next';
import { POSSIBLE_LANGUAGES } from '../../i18n/config';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);
  useClickOutside(selectorRef, () => {
    setIsOpen(false);
  });

  const handleOpenSelector = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (language: string) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SCLanguageSelector ref={selectorRef}>
      <button onClick={handleOpenSelector} className={isOpen ? 'selected' : undefined}>
        <GlobeIcon />
      </button>

      {isOpen && (
        <ul>
          {POSSIBLE_LANGUAGES.map((language) => (
            <li key={language}>
              <button
                onClick={() => {
                  handleChangeLanguage(language);
                }}
              >
                <span className='check-container'>
                  {i18n.language.split('-')[0] === language && <CheckIcon />}
                </span>
                <span>{[t(`languages.${language}`)]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </SCLanguageSelector>
  );
};

export default LanguageSelector;
