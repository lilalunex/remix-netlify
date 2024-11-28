import { useTranslation } from 'react-i18next';

export default function IdeasIndex() {
  const { t } = useTranslation();

  return (
    <div className="idea">
      <div className="md:flex">
        <div>
          <h2>Ideas</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('ideas.intro'),
            }}
          ></p>
        </div>
        <div className="ms-auto mt-8 md:mt-0">
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
