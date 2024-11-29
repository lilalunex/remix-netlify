import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function InformationAboutYou() {
  const [ip, setIp] = useState("Fetching...");
  const [showIp, setShowIp] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((error) => {
        setIp("Error fetching IP");
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
  };

  return (
    <div className="page">
      <h2>{t('tools.information-about-you.title')}</h2>
      <p>
        {t('tools.information-about-you.ip.ipAddress')}<br />
        <button onClick={handleCopy} className="pr-4 color-link">
          {t('tools.information-about-you.ip.copyToClipboard')}
        </button>
        -
        <button
          onClick={() => setShowIp((prevState) => !prevState)}
          className="color-link px-4"
        >
          {showIp ? t('tools.information-about-you.ip.hide') : t('tools.information-about-you.ip.show')}
        </button>
        {showIp && ip}
      </p>
    </div>
  );
}
