import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "@remix-run/react";
import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import LanguageSwitcher from './i18n/LanguageSwitcherDesktop';
import i18n from "./i18n/i18n";

import "./css/base.css";
import "./css/dev.css";
import "./css/ideas.css";
import "./css/nav.css";
import "./css/spacing.css";
import "./css/typography.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const isGerman = i18n.language === 'de';

  useEffect(() => {
    const backToTopButton = document.getElementById("back-to-top");

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        backToTopButton?.classList.remove("opacity-0", "invisible");
        backToTopButton?.classList.add("opacity-100", "visible");
      } else {
        backToTopButton?.classList.add("opacity-0", "invisible");
        backToTopButton?.classList.remove("opacity-100", "visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <div className="container mx-auto pt-5 md:pt-10">
            <div className="main-nav-holder flex">
              <nav className="main-nav mx-auto md:mx-0">
                <ul className="flex md:space-x-4 text-2xl">
                  <li><Link to="/"><img src="/menu/home.png" alt="Main Menu Navigation Home" loading="lazy" /></Link></li>
                  <li><Link to="/ideas"><img src="/menu/ideas.png" alt="Main Menu Navigation Ideas" loading="lazy" /></Link></li>
                  <li><Link to="/tools"><img src="/menu/tools.png" alt="Main Menu Navigation Tools" loading="lazy" /></Link></li>
                  <li><Link to="/partner"><img src="/menu/partner.png" alt="Main Menu Navigation Partner" loading="lazy" /></Link></li>
                  <li><Link to="/peace"><img src="/menu/peace.png" alt="Main Menu Navigation Peace" loading="lazy" /></Link></li>
                </ul>
              </nav>
              <div className="hidden md:flex flex-col main-nav-socials ms-auto text-right mr-8 mt-auto mb-1">
                {isGerman && (
                  <div>
                    <a href="https://www.xing.com/profile/AlexanderLunex_Scharow/cv" target="_blank">{t('dev.profiles.xing')}</a>
                  </div>
                )}
                <div><a href="https://github.com/lilalunex" target="_blank">{t('dev.profiles.github')}</a></div>
                <div><a href="https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" target="_blank">{t('dev.profiles.linkedin')}</a></div>
                <div><a href="https://instagram.com/lilalunex" target="_blank">{t('dev.profiles.instagram')}</a></div>
              </div>
              <LanguageSwitcher />
            </div>
            <main>{children}</main>
          </div>

          <button
            id="back-to-top"
            className="fixed bottom-10 right-10 p-4 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 opacity-0 invisible"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              strokeWidth="2"
            >
              <path d="M12 19V6M5 12l7-7 7 7" />
            </svg>
          </button>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </I18nextProvider>
  );
}

export default function App() {
  return (
    <Outlet />
  );
}
