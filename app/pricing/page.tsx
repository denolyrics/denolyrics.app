import Faq from "@/components/Faq";
import Link from "next/link";
import { Metadata, Viewport } from "next";

// COMPONENTS
import CounterDiscount from "@/components/CounterDiscount";
import TryForFree from "@/components/TryForFree";
import NavbarGetStarted from "@/components/NavbarGetStarted";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.denolyrics.com"),
  title: "Pricing | DenoLyrics",
  description:
    "The fastest web app for speech recognition, auto language detection and more. Plans starting at $0/month.",
  keywords: "DenoLyrics, el salvador, pricing",
  openGraph: {
    type: "website",
    url: "https://denolyrics.com/",
    title: "What’s New | DenoLyrics",
    description:
      "DenoLyrics is a web application built with an AI model that supports 143 languages, no matter if the audio speed is fast or slow.",
    siteName: "DenoLyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | DenoLyrics",
    description:
      "The fastest web app for speech recognition, auto language detection and more. Plans starting at $0/month.",
    creator: "@denolyrics",
    images: [
      {
        url: "https://denolyrics.com/preview.png",
      },
    ],
  },
  category: "website",
};

export const viewport: Viewport = {
  themeColor: "#180821",
};


function Pricing() {
  return (
    <>
      <NavbarGetStarted />
      <div className="text-3xl md:text-6xl font-extrabold text-center mb-5 mt-20 md:mt-40">
        <h1 id="title">Simple pricing, powerful features</h1>
      </div>
      <div className="flex justify-around mr-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {suscriptions.map((sub, index) => {
            return (
              <div
                key={sub.id}
                id={`Card ${sub.type}`}
                className="w-full max-w-sm p-4 bg-menu border border-[#828994] rounded-md shadow-md sm:p-8 ml-5 mr-5"
              >
                {sub.duration === pricingOff.type &&
                  pricingOff.expireDate >= new Date().getTime() && (
                    <div className="float-right">
                      <div className="p-3 bg-[#6930c3] text-white py-1 rounded-lg mb-2">
                        25% OFF
                      </div>
                    </div>
                  )}

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

                {sub.duration === pricingOff.type && (
                  <CounterDiscount expireDate={pricingOff.expireDate} />
                )}
                {/* List */}
                <ul role="list" className="space-y-5 my-7">
                  {sub.benefits.map((benefit) => {
                    return (
                      <li key={benefit} className="flex space-x-3">
                        {/* Icon */}
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-5 h-5 text-[#74F9BE]"
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
                <Link
                  href={sub.link}
                  id={`btn-plan-${index}`}
                  className="select-none w-full hover:shadow-md bg-[#292936] hover:bg-black text-white focus:outline-none text-sm font-medium rounded-lg inline-flex justify-center text-center px-5 py-2.5 mb-2 mt-2 border border-transparent"
                >
                  {sub.type === "Hobby" ? "Get Started for Free" : sub.type}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Faq />

      <TryForFree />
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
      "Speech recognition",
      "Auto language detection",
      "Export SRT caption file",
      "Export text to PDF or Notion page",
      "1 folder",
      "2 files",
      "Files with 10MB limit",
      "Email support",
    ],
    link: "https://app.denolyrics.com",
  },
  {
    id: 2,
    type: "Professional Silver",
    pricing: 7,
    duration: "month",
    benefits: [
      "Speech recognition",
      "Auto language detection",
      "Export SRT caption file",
      "Export text to PDF or Notion page",
      "Not limit folders",
      "Not limit files",
      "Files with 30MB limit",
      "Share folders",
      "Email Support",
    ],
    link: "https://app.denolyrics.com/settings/billing?modal=2",
  },
  {
    id: 3,
    type: "Professional Gold",
    pricing: 45,
    duration: "year",
    benefits: [
      "Speech recognition",
      "Auto language detection",
      "Export SRT caption file",
      "Export text to PDF or Notion page",
      "Not limit folders",
      "Not limit files",
      "Files with 60MB limit",
      "Share folders",
      "Email Support",
    ],
    link: "https://app.denolyrics.com/settings/billing?modal=3",
  },
];

const pricingOff = {
  type: "year",
  expireDate: 1699424864180, // fecha actual
};
