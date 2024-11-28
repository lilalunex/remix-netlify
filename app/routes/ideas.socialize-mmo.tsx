import { useTranslation } from 'react-i18next';

export default function SocializeMMO() {
  const { t } = useTranslation();

  return <div className="idea mobile-wheel-menu">
    <h2>Socialize MMO</h2>
    <p
      dangerouslySetInnerHTML={{
        __html: t('ideas.socialize-mmo.text'),
      }}
    ></p>
  </div>;
}
