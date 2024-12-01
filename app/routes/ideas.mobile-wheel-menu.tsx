import { useTranslation } from 'react-i18next';

export default function MobileWhileMenu() {
  const { t } = useTranslation();

  return <div className="idea mobile-wheel-menu">
    <h2>One handed mobile menu</h2>
    <p
      className="mw-ctrl"
      dangerouslySetInnerHTML={{
        __html: t('ideas.mobile-wheel-menu.intro'),
      }}
    ></p>

    <div className="flex flex-col xl:flex-row py-12 text-center justify-center items-center">
      <img src="/ideas/mobile-wheel-menu/one.png" alt="One Handed Mobile Menu 1" loading="lazy" />
      <img src="/ideas/mobile-wheel-menu/two.png" alt="One Handed Mobile Menu 2" loading="lazy" />
      <img src="/ideas/mobile-wheel-menu/three.png" alt="One Handed Mobile Menu 3" loading="lazy" />
      <img src="/ideas/mobile-wheel-menu/four.png" alt="One Handed Mobile Menu 4" loading="lazy" />
    </div>

    <p
      className="mw-ctrl"
      dangerouslySetInnerHTML={{
        __html: t('ideas.mobile-wheel-menu.ending'),
      }}
    ></p>
  </div>;
}
