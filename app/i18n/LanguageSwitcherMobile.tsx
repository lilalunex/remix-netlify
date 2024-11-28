import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcherMobile = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher-mobile flex lg:hidden pt-6 space-x-8 justify-center items-center">
            <button onClick={() => changeLanguage("en")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="English" className="inline" />
                <br />
                <p>EN</p>
            </button>
            <button onClick={() => changeLanguage("de")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="German" className="inline" />
                <br />
                <p>DE</p>
            </button>
            <button onClick={() => changeLanguage("jp")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" alt="Japanese" className="inline" />
                <br />
                <p>日本語</p>
            </button>
            <button onClick={() => changeLanguage("ru")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="Russian" className="inline" />
                <br />
                <p>RU</p>
            </button>
        </div>
    );
};

export default LanguageSwitcherMobile;
