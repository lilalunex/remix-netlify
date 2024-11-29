import { useTranslation } from 'react-i18next';

export default function Partner() {
  const { t } = useTranslation();

  return (
    <div className="partner">
      <h2 className="text-center py-5">{t('partner.title')}</h2>

      <div className="py-5 container mx-auto">
        <div className="md:flex items-center justify-center">
          <img
            src="/partner/dukkart.png"
            className="rounded-3xl md:w-96"
            alt={t('partner.dukkart.name')}
            loading="lazy"
          />
          <div className="text-center mx-8">
            <h3 className="pt-3">{t('partner.dukkart.name')}</h3>
            <p className="mx-auto">{t('partner.dukkart.description')}</p>
            <div className="pt-3 link-holder">
              <a
                href="http://dukkart.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('partner.dukkart.links.website')}
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="http://dreamstudiobadoeynhausen.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('partner.dukkart.links.rentalStudio')}
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="https://www.instagram.com/dukkart/"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('partner.dukkart.links.instagram')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full pt-12">
        <img
          src="/partner/jaxon.png"
          className="rounded-3xl md:w-96"
          alt={t('partner.jaxon.name')}
          loading="lazy"
        />
        <div className="text-center mx-8">
          <h3 className="pt-3">{t('partner.jaxon.name')}</h3>
          <p className="mx-auto">{t('partner.jaxon.description')}</p>
          <div className="pt-3 link-holder">
            <a
              href="https://shibuy.art/"
              className="btn border-2 py-4 px-6 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('partner.jaxon.links.website')}
            </a>
          </div>
          <div className="pt-5 link-holder">
            <a
              href="https://www.instagram.com/jaxon_the_6th/"
              className="btn border-2 py-4 px-6 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('partner.jaxon.links.instagram')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
