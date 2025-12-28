import { useEffect, useState } from "react";

export default function WhyTrustUs() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 30;

    const counter = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= target) {
        clearInterval(counter);
      }
    }, 50);

    return () => clearInterval(counter);
  }, []);

   return (
    <section className="w-full flex justify-center px-4 py-20">
      <div className="relative w-full max-w-6xl">

        {/* Center Label */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-15 py-3 rounded-xl ">
          <h2 className="text-3xl font-extrabold text-emerald-500 tracking-wide">
            WHY TRUST US
          </h2>
        </div>

        {/* Black Card */}
        <div className="bg-black rounded-3xl py-12 px-16 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            {/* Item 1 */}
            <div>
              <h3 className="text-emerald-400 text-2xl font-bold">
                30+ PROJECTS
              </h3>
              <p className="text-gray-300 mt-2">
                Delivered on time
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-emerald-400 text-2xl font-bold">
                100% SATISFACTION
              </h3>
              <p className="text-gray-300 mt-2">
                Client feedback
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-emerald-400 text-2xl font-bold">
                24/7 SUPPORT
              </h3>
              <p className="text-gray-300 mt-2">
                Always for you
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
