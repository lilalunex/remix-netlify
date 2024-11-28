export default function Partner() {
  return (
    <div className="partner">
      <h2 className="text-center py-5">Partner</h2>

      <div className="py-5 container mx-auto">
        <div className="md:flex items-center justify-center">
          <img src="/partner/dukkart.png" className="rounded-3xl md:w-96" alt="Sergej Dukkardt" loading="lazy" />
          <div className="text-center mx-8">
            <h3 className="pt-3">DukkArt Digital</h3>
            <p className="mx-auto">Photographer. Media Creator. Rental-studio.</p>
            <div className="pt-3 link-holder">
              <a
                href="http://dukkart.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="http://dreamstudiobadoeynhausen.de"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rental-studio
              </a>
            </div>
            <div className="pt-5 link-holder">
              <a
                href="https://www.instagram.com/dukkart/"
                className="btn border-2 py-4 px-6 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full pt-12">
        <img
          src="/partner/jaxon.png"
          className="rounded-3xl md:w-96"
          alt="Reza Jaxon"
          loading="lazy"
        />
        <div className="text-center mx-8">
          <h3 className="pt-3">Reza Jaxon</h3>
          <p className="mx-auto">Dancer. Graffiti Artist. Designer.</p>
          <div className="pt-3 link-holder">
            <a
              href="https://shibuy.art/"
              className="btn border-2 py-4 px-6 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
          <div className="pt-5 link-holder">
            <a
              href="https://www.instagram.com/jaxon_the_6th/"
              className="btn border-2 py-4 px-6 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
