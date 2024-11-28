import { useTranslation } from 'react-i18next';
import { Outlet, Link } from "@remix-run/react";

export default function Ideas() {
  const { t } = useTranslation();

  return (
    <section id="ideas" className="md:flex">
      <div className="sub-nav">
        <h2>{t('ideas.navi-title')}</h2>
        <ul>
          <li><Link to="mobile-wheel-menu">- {t('ideas.navi-title')}</Link></li>
          <br></br>
          <li><Link to="first-vue-website">- {t('ideas.mobile-wheel-menu.title')}</Link></li>
          <br></br>
          <li><Link to="socialize-mmo">- {t('ideas.first-vue-website.title')}</Link></li>
          <br></br>
          <li><Link to="the-coworking-hub">- {t('ideas.the-coworking-hub.title')}</Link></li>
        </ul>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </section>
  );
}
