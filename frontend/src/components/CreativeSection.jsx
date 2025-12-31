 // tum apni image laga dena
 import mainHolding from "../assets/images/main-holding.png";

export default function CreativeSection() {
  return (
    <section className="w-full bg-[#F4FFF7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="min-w-screen">
            <img
              src={mainHolding}
              alt="Creative Team"
              className="w-full max-w-[420px] rounded-xl"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="mr-3">
            <h2 className=" text-3xl md:text-5xl font-semibold text-black leading-snug">
              Help bring your ideas to <br />
              life with our quick <br />
              creative studio!
            </h2>

            <p className="mt-6 text-black text-base leading-relaxed">
              Unlock the potential of your ideas with our quick
              creative studio, crafted to help you shine and
              achieve your goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
