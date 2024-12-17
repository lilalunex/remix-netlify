import { useEffect } from "react";
import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';

export default function Index() {
  useEffect(() => {
    const breathingText = document.getElementById("breathing-text");
    if (!breathingText) return;
    const stages = ["breathe in", "hold", "breathe out"];
    const timings = [3800, 1600, 2600];
    let timeoutId: NodeJS.Timeout | null = null;
    let index = 0;

    const updateText = () => {
      breathingText.textContent = stages[index];
      index = (index + 1) % stages.length;
    };

    const runStages = () => {
      updateText();
      setTimeout(() => {
        index = 1;
        updateText();
        setTimeout(() => {
          index = 2;
          updateText();
          setTimeout(runStages, timings[2]);
        }, timings[1]);
      }, timings[0]);
    };

    runStages();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const mindfulEntries = [
    "Are you currently using a digital device because<br>you want to or just out of habit to kill time?",
    "Don't think about which gadget you can get next.<br>Take a moment to consider what you can let go of.",
  ];

  return (
    <>
      <div className="container min-h-screen-hero flex flex-wrap justify-between items-center">
        <div className="content-box w-1/2 p-12">
          <h1 className="underline">Relax, Breathe & Code.</h1>
          <div className="pt-4">
            <ul>
              <li>💻 Web Developer</li>
              <li>💻 Polyglot in the making</li>
              <li>🌆 Based in Germany</li>
              <li>🧘‍♂️ The faster the world moves, the slower I go</li>
            </ul>
          </div>
          <a
            // href="mailto:&#x61;&#x6c;&#x65;&#x78;&#x61;&#x6e;&#x64;&#x65;&#x72;&#x73;&#x63;&#x68;&#x61;&#x72;&#x6f;&#x77;&#x40;&#x69;&#x63;&#x6c;&#x6f;&#x75;&#x64;&#x2e;&#x63;&#x6f;&#x6d;?subject=Lilalunex Contact Me"
            className="btn border-2 py-4 px-6 rounded-full mt-8 text-soft-cream hover:bg-soft-cream hover:text-earthy-brown"
          >Contact me</a>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="inner-breathing-circle absolute"></div>
          <div className="inner-breathing-circle absolute"></div>
          <div className="breathing-circle absolute"></div>
          <span id="breathing-text" className="absolute pt-21">breathe in</span>
        </div>

        <div
          className="w-full border absolute"
          style={{
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            borderWidth: "3px",
            borderColor: "#695950"
          }}
        ></div>
        <div className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: "-104px"
          }}
        >
          <img src="/public/home/lotus.png" alt="" />
        </div>

      </div>

      <div className="bg-white" style={{ paddingTop: "48px" }}>
        <div className="container text-center py-24">
          <h2>Mindful & Intentional</h2>
          {mindfulEntries.map((entry, index) => (
            <p
              className="text-center pt-8 mx-auto"
              dangerouslySetInnerHTML={{
                __html: entry
              }}
            ></p>
          ))}
        </div>
      </div>

      <div>
        <div className="container text-center pt-24 flex">
          <div className="w-3/5">
            <h2>Lunex Edakumi</h2>
            <p className="mx-auto">
              In a hasty time ...<br></br>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="w-5/5">
            <img src="/public/home/lunex_split.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
