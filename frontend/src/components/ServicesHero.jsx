import creative from "../assets/images/creative.png";

export default function ServicesHero() {
  return (
    <section className="w-full bg-white overflow-hidden mb-20">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* MAIN ROW */}
        <div className="relative flex items-start">

          {/* TEXT BLOCK */}
          <div className="mt-35">
            <h1 className="gradient-text-serice leading-tight text-6xl">
              Helping You Bring Your <br />
              Ideas to Life with Quick,<br /> 
              Creative, and Responsible.
            </h1>

            <p className="mt-6 max-w-md text-black text-base font-medium">
              Unlock the potential of innovation with smart tech
              solutions that elevate your success through quick
              response, high-level work, and fully responsive
              designs.
            </p>
          </div>

          {/* LOGO – TOUCHING TEXT */}
          <div className="absolute right-0 top-4 translate-x-[0%]">
            <img
              src={creative}
              alt="Hero Illustration"
              className="w-[600px] ml-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
