import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" mt-44">
        <div className="text-2xl md:text-6xl font-extrabold text-center">
          <span>Audio to Text with AI</span>
        </div>
        <br />
        <div className="max-w-screen-md m-auto">
          <p className="text-lg font-normal text-center">
            Get text to audio with few clicks through Artificial Intelligence,
            DenoLyrics is a web application that understands many languages.
          </p>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button className="select-none text-white hover:shadow-md bg-[#363141] hover:bg-black focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent">
            Get started for free
          </button>
        </div>
        <p className="text-center text-sm">No credit card required</p>

        <div className="drop-shadow-[0_50px_50px_rgba(41,41,54,1)] flex justify-center items-center mt-10">
          <Image
            unoptimized={true}
            src={"/screenshot.png"}
            width="1200"
            alt=""
            height="550"
          />
        </div>
      </div>

      <div className="bg-[#292936] h-96 grid place-content-center mt-20">
        <div className="max-w-screen-lg m-auto">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-white">
                <div className="bg-[#74F9BE] w-[65px] h-[60px] rounded-xl relative mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#363141"
                    className="w-10 h-10"
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(30%, -50%)",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>
                </div>

                <span>Built with Artificial Intelligence</span>
              </div>
              <p className="text-lg font-normal text-[#CCD1D6] mt-2">
                Built with an AI model that supports +50 languages, no matter if
                the speed is fast or slow.
              </p>
            </div>

            <div>
              <div className="text-2xl md:text-4xl font-bold text-white">
                <div className="bg-[#74F9BE] w-[65px] h-[60px] rounded-xl relative mb-5">
                  <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="#363141"
                   className="w-10 h-10"
                   style={{
                     position: "absolute",
                     top: "50%",
                     transform: "translate(30%, -50%)",
                   }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <span>We use the best technologies</span>
              </div>
              <p className="text-lg font-normal text-[#CCD1D6] mt-2">
                Our team is dedicated to writing quality code with the latest
                and greatest in web technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}
