import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="lg:hidden space-x-4 pt-6 flex justify-center items-center">
            <button onClick={() => changeLanguage("en")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="English" width="50" className="inline" />
                <br />
                EN
            </button>
            <button onClick={() => changeLanguage("de")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" alt="German" width="50" className="inline mr-1" />
                <br />
                DE
            </button>
            <button onClick={() => changeLanguage("jp")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" alt="Japanese" width="50" className="inline mr-1" />
                <br />
                JP
            </button>
            <button onClick={() => changeLanguage("ru")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="Russian" width="50" className="inline mr-1" />
                <br />
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
