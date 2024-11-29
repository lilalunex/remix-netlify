import { useTransition } from "react";
import { useTranslation } from "react-i18next";

export default function ToolsIndex() {
  const { t } = useTranslation();

  return (
    <div className="idea">
      <div className="lg:flex">
        <div>
          <h2>{t('tools.title')}</h2>
          <p
              dangerouslySetInnerHTML={{
                __html: t('tools.intro'),
              }}
            ></p>
        </div>
        <div className="ms-auto mt-8 lg:mt-0">
          <figure>
            <img src="/dev/dev4.jpg" alt="" className="rounded-3xl mx-auto" width="300" loading="lazy" />
            <figcaption className="text-center pt-1">📸 Sergej Dukkardt</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
