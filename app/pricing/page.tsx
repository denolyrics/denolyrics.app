import Faq from "@/components/Faq";
import React from "react";

function Pricing() {
  return (
    <>
      <div className="text-3xl md:text-6xl font-extrabold text-center mb-5 mt-5">
        <h1 id="title">Simple pricing, powerful features</h1>
      </div>
      <div className="flex justify-around mr-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {suscriptions.map((sub, index) => {
            return (
              <div
                key={sub.id}
                id={`Card ${sub.type}`}
                className="w-full max-w-sm p-4 bg-menu border border-[#56545e] rounded-md shadow-md sm:p-8 ml-5 mr-5"
              >
                <h5 className="mb-4 text-xl font-bold">{sub.type}</h5>
                <div className="flex items-baseline">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {sub.pricing}
                  </span>
                  <span className="ml-1 text-xl font-normal ">
                    {sub.type === "Hobby" ? "" : "/" + sub.duration}
                  </span>
                </div>
                {/* List */}
                <ul role="list" className="space-y-5 my-7">
                  {sub.benefits.map((benefit) => {
                    return (
                      <li key={benefit} className="flex space-x-3">
                        {/* Icon */}
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-5 h-5 text-[#292936]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-normal leading-tight">
                          {benefit}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  type="button"
                  id={`btn-plan-${index}`}
                  className="select-none w-full hover:shadow-md bg-[#292936] hover:bg-black text-white focus:outline-none text-sm font-medium rounded-lg inline-flex justify-center text-center px-5 py-2.5 mb-2 mt-2 border border-transparent"
                >
                  {sub.type === "Hobby" ? "Get Started for Free" : sub.type}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Faq />
    </>
  );
}

export default Pricing;

const suscriptions = [
  {
    id: 1,
    type: "Hobby",
    pricing: 0,
    duration: "month",
    benefits: [
      "Text recognition in multiple languages",
      "1 folder",
      "5 files",
      "files with 10MB limit",
      "Email support"
    ],
    link: "https://app.denolyrics.com",
  },
  {
    id: 2,
    type: "Professional Silver",
    pricing: 7,
    duration: "month",
    benefits: [
      "Text recognition in multiple languages",
      "Not limit folders",
      "Not limit files",
      "files with 30MB limit",
      "Email Support",
    ],
    link: "https://app.denolyrics.com/settings/billing?modal=2",
  },
  {
    id: 3,
    type: "Professional Gold",
    pricing: 60,
    duration: "year",
    benefits: [
      "Text recognition in multiple languages",
      "Not limit folders",
      "Not limit files",
      "files with 60MB limit",
      "Email Support",
    ],
    link: "https://app.denolyrics.com/settings/billing?modal=3",
  },
];
