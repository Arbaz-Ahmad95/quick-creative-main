export default function TreeLayout() {
  return (
    <div className="w-full flex justify-center py-20 bg-white">
      <div className="relative w-[1100px] h-[900px]">
        

        {/* CENTER VERTICAL LINE */}
        <div className="absolute left-1/2 top-[160px] bottom-[120px] w-[2px] bg-emerald-400 -translate-x-1/2" />


        {/* UI DESIGN (TOP CENTER) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <Box
            title="UI Design"
              width="570px"
            desc="We Create Intuitive And Visually Appealing User Interface That Enhance User Experience And Engagement"
            points={[
              "User Research & Prototyping",
              "Wireframing & Mockups",
              "Interaction Design",
            ]}
          />
        </div>

        {/* WEBSITE BUILDING (RIGHT FIRST) */}
        <RightNode
          top="330px"
          title="Website Building"
          desc="From Simple Landing Pages To Complex Website, We Build Responsive And Functional Website"
          points={[
            "Front-End Development",
            "Back-End Development",
          ]}
        />

        {/* GRAPHIC DESIGN (LEFT SECOND) */}
        <LeftNode
          top="390px"
          title="Graphic Design"
          desc="From Branding To Marketing Assets, We Create Visual Identities That Resonate"
          points={[
            "Brand Identity & Logos",
            "Packaging Design",
            "Marketing & Advertising Design",
          ]}
        />

        {/* POSTER DESIGN (LEFT THIRD) */}
        <LeftNode
          top="660px"
          title="Poster Design"
          desc="Our Visuals Instantly Grab Attention With Striking Designs And Captivating Feeds, Ensuring Your Message Leaves A Lasting Impression."
          points={[
            "Event & Promotional Poster",
            "Large Format Print-Ready Files",
          ]}
        />

        {/* DATA ANALYST (RIGHT LAST) */}
        <RightNode
          top="600px"
          title="Data Analyst"
          desc="We Transform Complex Datasets Into Clear, Actionable Insights. Don't Just Collect Numbers Understand What They Mean For Your Future Growth And Strategy"
          points={[
            "Performance Reporting And Dashboards",
            "User Behavior Analysis",
          ]}
        />
      </div>
    </div>
  );
}

/* RIGHT NODE */
function RightNode({ top, title, desc, points }) {
  return (
    <>
      {/* BOX */}
      <div
        className="absolute right-[80px]"
        style={{ top: `calc(${top} - 60px)` }}
      >
        <Box title={title} desc={desc} points={points} />
      </div>

      {/* HORIZONTAL LINE */}
      <div
        className="absolute h-[2px] bg-emerald-400"
        style={{
          top,
          right: "459px",
          width: "90px",
        }}
      />
    </>
  );
}

/* LEFT NODE */
function LeftNode({ top, title, desc, points }) {
  return (
    <>
      {/* BOX */}
      <div
        className="absolute left-[80px]"
        style={{ top: `calc(${top} - 60px)` }}
      >
        <Box title={title} desc={desc} points={points} />
      </div>

      {/* HORIZONTAL LINE */}
      <div
        className="absolute h-[2px] bg-emerald-400"
        style={{
          top,
         left: "459px",
          width: "90px",
        }}
      />
    </>
  );
}

/* BOX COMPONENT */
function Box({ title, desc, points, width }) {
  return (
    <div
      className="p-6 border rounded-xl bg-white shadow-sm"
      style={{ width: width || "380px" }}
    >
      <h3 className="font-bold text-xl mb-2">{title}</h3>

      <p className="text-sm text-gray-600 mb-4">{desc}</p>

      <ul className="text-sm text-gray-700 space-y-1">
        {points.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


