export default function ServicesTree() {
  return (
    <div className="w-full bg-white py-24 flex justify-center">
      <div className="relative w-[1200px]">

        {/* ROOT VERTICAL LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-emerald-500 -translate-x-1/2"></div>

        {/* ===== UI DESIGN (ROOT) ===== */}
        <div className="mx-auto w-[420px] border rounded-xl p-6 bg-white">
          <h3 className="font-bold text-lg mb-2">UI Design</h3>
          <p className="text-sm mb-3">
            We Create Intuitive And Visually Appealing User Interface That
            Enhance User Experience And Engagement
          </p>
          <ul className="text-sm space-y-1">
            <li>• User Research & Prototyping</li>
            <li>• Wireframing & Mockups</li>
            <li>• Interaction Design</li>
          </ul>
        </div>

        {/* ===== WEBSITE BUILDING (RIGHT) ===== */}
        <div className="relative mt-24 flex items-center">
          {/* horizontal line */}
          <div className="absolute left-1/2 top-1/2 w-[90px] h-[2px] bg-emerald-500"></div>

          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-start pl-24">
            <div className="w-[420px] border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg mb-2">Website Building</h3>
              <p className="text-sm mb-3">
                From Simple Landing Pages To Complex Website, We Build Responsive
                And Functional Website
              </p>
              <ul className="text-sm space-y-1">
                <li>• Front-End Development</li>
                <li>• Back-End Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== GRAPHIC DESIGN (LEFT) ===== */}
        <div className="relative mt-24 flex items-center">
          {/* horizontal line */}
          <div className="absolute right-1/2 top-1/2 w-[90px] h-[2px] bg-emerald-500"></div>

          <div className="w-1/2 flex justify-end pr-24">
            <div className="w-[420px] border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg mb-2">Graphic Design</h3>
              <p className="text-sm mb-3">
                From Branding To Marketing Assets, We Create Visual Identities That Resonate
              </p>
              <ul className="text-sm space-y-1">
                <li>• Brand Identity & Logos</li>
                <li>• Packaging Design</li>
                <li>• Marketing & Advertising Design</li>
              </ul>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* ===== DATA ANALYST (RIGHT) ===== */}
        <div className="relative mt-24 flex items-center">
          {/* horizontal line */}
          <div className="absolute left-1/2 top-1/2 w-[90px] h-[2px] bg-emerald-500"></div>

          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-start pl-24">
            <div className="w-[420px] border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg mb-2">Data Analyst</h3>
              <p className="text-sm mb-3">
                We Transform Complex Datasets Into Clear, Actionable Insights
              </p>
              <ul className="text-sm space-y-1">
                <li>• Performance Reporting And Dashboards</li>
                <li>• User Behavior Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== POSTER DESIGN (LEFT) ===== */}
        <div className="relative mt-24 flex items-center">
          {/* horizontal line */}
          <div className="absolute right-1/2 top-1/2 w-[90px] h-[2px] bg-emerald-500"></div>

          <div className="w-1/2 flex justify-end pr-24">
            <div className="w-[420px] border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg mb-2">Poster Design</h3>
              <p className="text-sm mb-3">
                Our Visuals Instantly Grab Attention With Striking Designs
                And Captivating Feeds
              </p>
              <ul className="text-sm space-y-1">
                <li>• Event & Promotional Poster</li>
                <li>• Large Format Print-Ready Files</li>
              </ul>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>

      </div>
    </div>
  );
}
