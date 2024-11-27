import { useEffect, useState } from "react";

export default function InformationAboutYou() {
  const [userInfo, setUserInfo] = useState({});
  const [ip, setIp] = useState("Fetching...");
  const [showIp, setShowIp] = useState(false);
  const [themePreference, setThemePreference] = useState("");
  const [batteryInfo, setBatteryInfo] = useState({ level: 0, isCharging: false });

  useEffect(() => {
    const info = {
      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      onlineStatus: navigator.onLine ? "Online" : "Offline",
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      width: window.innerWidth,
      height: window.innerHeight
    };

    console.log("navigator:", navigator);

    setUserInfo(info);

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((error) => {
        setIp("Error fetching IP");
      });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemePreference(mediaQuery.matches ? "Dark Mode" : "Light Mode");

    navigator.getBattery().then((battery) => {
      setBatteryInfo({
        level: battery.level * 100,
        isCharging: battery.charging,
      });

      battery.addEventListener("chargingchange", () => {
        setBatteryInfo((prevState) => ({
          ...prevState,
          isCharging: battery.charging,
        }));
      });

      battery.addEventListener("levelchange", () => {
        setBatteryInfo((prevState) => ({
          ...prevState,
          level: battery.level * 100,
        }));
      });
    });

  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
  };

  return (
    <div className="page">
      <h2>Information about you</h2>
      <table>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Your IP address</td>
            <td className="border border-gray-300 px-4 py-2">
              <button onClick={handleCopy} className="pr-4 color-link">
                Copy to clipboard
              </button>
              -
              <button
                onClick={() => setShowIp(prevState => !prevState)}
                className="color-link px-4"
              >
                {showIp ? "Hide" : "Show"}
              </button>
              {showIp && ip}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Viewport</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.width} x {userInfo.height}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Screen resolution</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.screenResolution}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Browser</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.browser}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Platform</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.platform}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Language</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.language}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Online Status</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.onlineStatus}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Theme preference</td>
            <td className="border border-gray-300 px-4 py-2">{themePreference}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Battery level</td>
            <td className="border border-gray-300 px-4 py-2">{batteryInfo.level}%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Is charging</td>
            <td className="border border-gray-300 px-4 py-2">{batteryInfo.isCharging ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Time zone</td>
            <td className="border border-gray-300 px-4 py-2">{userInfo.timeZone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
