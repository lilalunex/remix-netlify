import { useTranslation } from "react-i18next";

type ChangeLogEntry = {
  date: string;
  entries: (string | JSX.Element)[];
};

export default function ChangeLog() {
  const { t } = useTranslation();

  const changeLogEntries = t('tools.change-log.change-log.entries', { returnObjects: true }) as ChangeLogEntry[];

  if (!Array.isArray(changeLogEntries)) {
    return <div>No changelog entries available.</div>;
  }

  return (
    <div className="page">
      <h2>{t('tools.change-log.title')}</h2>            
      <p
        dangerouslySetInnerHTML={{
          __html: t('tools.change-log.intro'),
        }}
      ></p>
      <div className="pt-8">
        {changeLogEntries.map((entryGroup, index) => (
          <div key={index} className="md:mb-4 pt-4 md:pt-0">
            <div className="flex">
              <div className="font-bold w-32">{entryGroup.date}</div>
              <div className="flex-1">
                {entryGroup.entries.map((entry, entryIndex) => (
                  <p key={entryIndex} className="pl-4" dangerouslySetInnerHTML={{ __html: entry as string }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
