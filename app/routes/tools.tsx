import { Outlet, Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Tools() {
  const { t } = useTranslation();

  return (
    <div className="tools md:flex">
      <div className="sub-nav">
        <h2>{t('tools.navi-title')}</h2>
        <ul>
          <li><Link to="change-log">- {t('tools.change-log.title')}</Link></li>
          <br />
          <li><Link to="information-about-you">- {t('tools.information-about-you.title')}</Link></li>
        </ul>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
