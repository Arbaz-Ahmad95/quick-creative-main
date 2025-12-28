export default function CTASection() {
  return (
    <section className="w-full bg-white py-20 px-4 mt-30">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className=" heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          To enhance your online presence,
          <br />
          explore our innovative solutions.
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
          We’re here to help your business flourish with clever plans and
          fresh ideas. How about we start working together to achieve
          lasting success?
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
