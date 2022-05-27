import React from 'react';
import { useTranslation } from 'react-i18next';

const TestLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  console.log(i18n);
  console.log(t);
  return (
    <div>
      <div>
        <p onClick={() => changeLanguage('ru')}>ru</p>
        <p onClick={() => changeLanguage('uz')}>uz</p>
        <p onClick={() => changeLanguage('en')}>en</p>
        <p onClick={() => changeLanguage('уз')}>уз</p>
      </div>
      <p>
        language {t('test.p')}
      </p>
    </div>
  );
};

export default TestLanguage;