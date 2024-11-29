import { useTranslation } from 'react-i18next';

export default function Peace() {
  const { t } = useTranslation();

  return (
    <div className="peace text-center">
      <h2>{t('peace.quote')}</h2>
      <img
        src="/peace/peace.jpg"
        alt="Dancer in split decision"
        className="rounded md:w-1/2 mx-auto"
        loading="lazy"
      />
      <p
        className='pt-8'
        dangerouslySetInnerHTML={{
          __html: t('peace.description'),
        }}
      ></p>
      <p className="pt-24">{t('peace.footer')}</p>
      <p className="text-8xl pt-8">{t('peace.emoji')}</p>
    </div>
  );
}
