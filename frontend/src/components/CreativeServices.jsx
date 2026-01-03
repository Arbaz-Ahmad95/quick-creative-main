import React from "react";
import CreaditCard from '../assets/images/CreaditCard.png'
import NetClan from '../assets/images/NetClan.png';
import Pyweek from '../assets/images/Pyweek.png';
import Doctor from '../assets/images/Doctor.png';
export default function CreativeServices() {
  return (
    <div className="w-full bg-[#123b2f] py-20">
      <div className="max-w-7xl mx-auto px-12">

        {/* HEADINGS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Poster design</h3>
            <p className="text-sm max-w-sm">
              The poster design process includes research, concept creation,
              design execution, and refinement to deliver a clear, impactful final result.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">UI/UX Design</h3>
            <p className="text-sm max-w-sm">
              Elevate your digital experience with intuitive, user-friendly design.
              Convert visitors into customers and make a lasting impact.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Creative production</h3>
            <p className="text-sm max-w-sm">
              We transform your ideas into reality, creating content that grabs
              attention and motivates people to take action.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-black rounded-2xl overflow-hidden h-[320px]">
            <img
              src={CreaditCard}
              alt="Poster design"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-black rounded-2xl overflow-hidden h-[320px]">
            <img
              src={Doctor}
              alt="Creative production"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden h-[320px]">
            <img
              src={NetClan}
              alt="UI UX"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-black rounded-2xl overflow-hidden h-[320px]">
            <img
              src={Pyweek}
              alt="Mobile UI"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
