import { useEffect, useState } from "react";

export default function Index() {
  const images = [
    "/dev/dev1.jpg",
    "/dev/dev2.jpg",
    "/dev/dev3.jpg"
  ];

  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);

    const isMobile = window.innerWidth < 768;
    const filteredImages = isMobile ? images.slice(1) : images;

    setRandomImage(filteredImages[randomIndex]);
  }, []);

  return (
    <div className="dev">
      <div className="md:flex justify-between">
        {randomImage && (
          <figure className="md:hidden pb-8">
            <img
              src={randomImage}
              alt="Random image of dev"
              className="rounded-xl mx-auto w-3/4"
              width="400"
            />
            <figcaption className="text-center pt-1">📸 Sergej Dukkardt</figcaption>
          </figure>
        )}
        <div className="md:w-3/5 text-center">
          <h1>Yet another web developer</h1>
          <p>
            This website was started to learn the <a href="https://remix.run/" target="_blank">Remix</a> framework.<br className="hidden md:block" /> Sure will not win a design awards as of now.<br className="hidden md:block" /> I enjoy Remix and look forward to improve this website.
          </p>
          <p className="link-holder">
            <a
              href="mailto:&#x61;&#x6c;&#x65;&#x78;&#x61;&#x6e;&#x64;&#x65;&#x72;&#x73;&#x63;&#x68;&#x61;&#x72;&#x6f;&#x77;&#x40;&#x69;&#x63;&#x6c;&#x6f;&#x75;&#x64;&#x2e;&#x63;&#x6f;&#x6d;"
              className="btn border-2 py-4 px-6 rounded-full"
            >
              Contact me
            </a>
          </p>
          <div className="pt-8">
            <h2 className="pb-4">Skills</h2>
            <div className="skills mx-auto flex flex-wrap justify-center sm:gap-8 md:gap-4">
              <img src="/dev/skills/html5.png" alt="HTML5" className="w-24 h-24" />
              <img src="/dev/skills/css3.png" alt="CSS3" className="w-24 h-24" />
              <img src="/dev/skills/js.png" alt="JavaScript" className="w-24 h-24" />
              <img src="/dev/skills/mysql.png" alt="MySQL" className="w-24 h-24" />
              <img src="/dev/skills/sass.png" alt="Sass" className="w-24 h-24" />
              <img src="/dev/skills/bs.png" alt="Bootstrap" className="w-24 h-24" />
              <img src="/dev/skills/tw.png" alt="Tailwind" className="w-24 h-24" />
              <img src="/dev/skills/wp.png" alt="WordPress" className="w-24 h-24" />
              <img src="/dev/skills/woo.png" alt="WooCommerce" className="w-24 h-24" />
              <img src="/dev/skills/t3.png" alt="WooCommerce" className="w-24 h-24" />
              <img src="/dev/skills/vue.png" alt="Vue.js" className="w-24 h-24" />
              <img src="/dev/skills/sw.png" alt="Vue.js" className="w-24 h-24" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-2/5 items-center md:mx-8 lg:mx-0">
          <figure>
            {randomImage && (
              <img
                src={randomImage}
                alt="Random image of dev"
                className="rounded-xl"
                width="400"
              />
            )}
            <figcaption className="text-center pt-1">📸 Sergej Dukkardt</figcaption>
          </figure>
        </div>
      </div>
      <div className="socials text-center pb-12">
        <h2>Socials</h2>
        <div className="md:flex justify-center gap-8">
          <div className="pb-6 md:pb-0 gap-4 md:gap-8 flex justify-center">
            <a href="https://www.xing.com/profile/AlexanderLunex_Scharow/cv" target="_blank" className="btn border-2 py-4 px-6 rounded-full">Xing</a>
            <a href="https://github.com/lilalunex" target="_blank" className="btn border-2 py-4 px-6 rounded-full">GitHub</a>
          </div>
          <div className="gap-4 md:gap-8 flex justify-center">
            <a href="https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" target="_blank" className="btn border-2 py-4 px-6 rounded-full">LinkedIn</a>
            <a href="https://instagram.com/lilalunex" target="_blank" className="btn border-2 py-4 px-6 rounded-full">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
