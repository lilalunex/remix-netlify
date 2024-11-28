import { useTranslation } from 'react-i18next';

export default function IdeasIndex() {
  const { t } = useTranslation();

  return (
    <div className="idea">
      <div className="lg:flex">
        <div>
          <h2>{t('ideas.title')}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('ideas.intro'),
            }}
          ></p>
        </div>
        <div className="ms-auto mt-8 lg:mt-0">
          <img
            src="/ideas/dancer.png"
            alt="Dancer in Lotus Handstand Invert"
            className="rounded-3xl"
            width="300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
