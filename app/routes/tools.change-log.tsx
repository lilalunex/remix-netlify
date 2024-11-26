export default function ChangeLog() {
  const changeLogEntries = [
    {
      date: "26.10.24",
      entries: [
        "Hosting on Netlify.",
        <p>
          Added responsiveness.<br></br><i className="pl-8 font-extralight">💭 Looks pretty neat on mobile.</i>
        </p>
      ],
    },
    {
      date: "23-24.10.24",
      entries: [
        <span>
          Realizing this website in{" "}
          <a
            href="https://github.com/lilalunex/remix-netlify/tree/fbe90f84b1aec5abe1b8b6c588aef7ef228b5699"
            target="_blank"
            rel="noopener noreferrer"
          >
            version 1.0
          </a>
          .
        </span>,
      ],
    },
    {
      date: "20.10.24",
      entries: [
        "Starting to learn Remix for potential new job.",
        "Planning on creating this website with Remix.",
      ],
    },
  ];


  return (
    <div className="page">
      <h2>Change Log</h2>
      <div>
        {changeLogEntries.map((entryGroup, index) => (
          <div key={index} className="md:mb-4 pt-4 md:pt-0">
            <div className="flex">
              <div className="font-bold w-32">{entryGroup.date}</div>
              <div className="flex-1">
                {entryGroup.entries.map((entry, entryIndex) => (
                  <p key={entryIndex} className="pl-4">{entry}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
