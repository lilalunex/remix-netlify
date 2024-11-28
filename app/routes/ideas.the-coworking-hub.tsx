import { useTranslation } from 'react-i18next';

export default function FirstVueWebsite() {
  const { t } = useTranslation();

  return (
    <div className="idea first-vue-website">
      <h2>The coworking hub</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: t('ideas.the-coworking-hub.text'),
        }}
      ></p>
    </div>
  );
}
