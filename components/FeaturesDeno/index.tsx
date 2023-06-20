"use client";
import { useState } from "react";

function FeaturesDeno() {
  const [FeatureSelected, setFeatureSelected] = useState<
    "text" | "captions" | "summarize" | "translate"
  >("text");
  return (
    <div className="max-w-screen-xl m-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-5 p-3">
        <div className="shawdow-modal">
          <div className="bg-[#363141] p-3 mt-4 rounded-t-lg">
            <div className="flex md:justify-center gap-2 scroll-output-tracks-horizontal">
              <div
                onClick={() => setFeatureSelected("text")}
                className={`inline-flex gap-2 rounded-t-lg cursor-pointer ${
                  FeatureSelected === "text"
                    ? "bg-active font-bold"
                    : "bg-active-hover"
                } p-3`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>Text</div>
              </div>

              <div
                onClick={() => setFeatureSelected("captions")}
                className={`inline-flex gap-2 rounded-t-lg cursor-pointer ${
                  FeatureSelected === "captions"
                    ? "bg-active font-bold"
                    : "bg-active-hover"
                } p-3`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="#C4C1D0"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm160,0a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h96A8,8,0,0,1,208,136Zm-48,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h96A8,8,0,0,1,160,168Zm48,0a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h16A8,8,0,0,1,208,168Z"></path>
                  </svg>
                </div>
                <div>Captions</div>
              </div>

              <div
                onClick={() => setFeatureSelected("summarize")}
                className={`inline-flex gap-2 rounded-t-lg cursor-pointer ${
                  FeatureSelected === "summarize"
                    ? "bg-active font-bold"
                    : "bg-active-hover"
                } p-3`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <div>Summarize</div>
              </div>

              <div
                onClick={() => setFeatureSelected("translate")}
                className={`inline-flex gap-2 rounded-t-lg cursor-pointer ${
                  FeatureSelected === "translate"
                    ? "bg-active font-bold"
                    : "bg-active-hover"
                } p-3`}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                    />
                  </svg>
                </div>
                <div>Translate</div>
              </div>
            </div>
          </div>
          <div className="bg-[#363141] flex justify-between gap-1 p-3">
            <>
              <p className="font-bold">
                Language: <span className="capitalize">English</span>
              </p>
            </>
          </div>
          <div className="bg-[#363141] h-[50vh] scroll-output-tracks rounded-b-lg">
            <div className="w-full resize-none bg-transparent p-3">
              <div className="pb-5">
                {FeatureSelected === "text" && (
                  <span>
                    {
                      "What I like about technology is that it grows with us. I love being a content creator. I can make people happy and put a smile on their faces. I have the passion to solve problems in society and for me, the better impact is through technology. Our generation grew up with technology. Now it's grown to a stage that you can do a lot of things with it and it's a way of solving problems. So that's why I love it so much. It's organic, it grows as we do. So that's very fascinating. I'm Molly. I'm the CEO and founder of Velodash, a platform for cyclists to meet up and ride together. So I enjoy outdoor cycling just because you're with nature, but what's even better is that if you have people to enjoy this experience with you. Velodash is great for just planning the routes and letting who's joining have an idea what they will expect. Is it very difficult? Is it okayish? And then when you lose sight of your teammates, you don't have to worry because you can simply check the app and know their real-time location. When I was younger, I used to be really, really, really shy. Like I was the quiet one in school, even in family gatherings. I would just usually sit in one corner and just look at the floor. My brother helped me by doing videos with me. Okay, and next over here we have the TikTok Award. I was talking to the camera so that made me feel more comfortable if that makes sense. I'm Niana Guerrero and I'm a content creator from Quezon City, Philippines."
                    }
                  </span>
                )}

                {FeatureSelected === "captions" && (
                  <>
                    {segments.map(({ start, text }) => {
                      return (
                        <div
                          key={window.crypto.randomUUID()}
                          className="grid gap-4 grid-captions px-3 md:px-0"
                        >
                          <div className="text-center text-indigo-400 hover:underline cursor-pointer">
                            {convertSecondsToTime(start).replace(".", ":")}
                          </div>
                          <div>{text}</div>
                        </div>
                      );
                    })}
                  </>
                )}

                {FeatureSelected === "summarize" && (
                  <div className="grid h-[40vh] place-content-center">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>

                    <p className="text-center mt-7">Coming soon...</p>
                  </div>
                )}

                {FeatureSelected === "translate" && (
                  <div className="grid h-[40vh] place-content-center">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-16 h-16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                        />
                      </svg>
                    </div>

                    <p className="text-center mt-7">Coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:h-[50vh] md:place-content-end">
          <div className="text-3xl md:text-4xl font-extrabold mb-5 mt-5 text-[#C9D1D9] text-center md:text-end">
            <p>Explore our features</p>
          </div>
          <div>
            <div className="flex justify-center md:justify-end py-3">
              <button
                onClick={() => setFeatureSelected("text")}
                className={`bg-transparenrt text-xl md:text-2xl ${
                  FeatureSelected === "text"
                    ? "text-[#C9D1D9]"
                    : "text-[#a2a9b0] hover:text-[#C9D1D9]"
                }`}
              >
                Audio transcription
              </button>
            </div>
            <div className="flex justify-center md:justify-end py-3">
              <button
                onClick={() => setFeatureSelected("captions")}
                className={`bg-transparent text-xl md:text-2xl ${
                  FeatureSelected === "captions"
                    ? "text-[#C9D1D9]"
                    : "text-[#a2a9b0] hover:text-[#C9D1D9]"
                }`}
              >
                Captions
              </button>
            </div>
            <div className="flex justify-center md:justify-end py-3">
              <button
                onClick={() => setFeatureSelected("summarize")}
                className={`bg-transparent text-xl md:text-2xl ${
                  FeatureSelected === "summarize"
                    ? "text-[#C9D1D9]"
                    : "text-[#a2a9b0] hover:text-[#C9D1D9]"
                }`}
              >
                Text summarization
              </button>
            </div>
            <div className="flex justify-center md:justify-end py-3">
              <button
                onClick={() => setFeatureSelected("translate")}
                className={`bg-transparent text-xl md:text-2xl ${
                  FeatureSelected === "translate"
                    ? "text-[#C9D1D9]"
                    : "text-[#a2a9b0] hover:text-[#C9D1D9]"
                }`}
              >
                Multiple language translation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesDeno;

// FUNCTION FOR CONVERT AUDIO POSITION TO TIME 22.64 -> 00:22:64
function convertSecondsToTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours === 0) {
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10
        ? "0" + parseFloat(seconds.toFixed(2))
        : parseFloat(seconds.toFixed(2))
    }`;
  }

  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

const segments = [
  {
    start: 0,
    end: 12.36,
    text: " What I like about technology is that it grows with us.",
  },
  {
    start: 12.36,
    end: 14.8,
    text: " I love being a content creator.",
  },
  {
    start: 14.8,
    end: 22.2,
    text: " I can make people happy and put a smile on their faces.",
  },
  {
    start: 22.2,
    end: 29.76,
    text: " I have the passion to solve problems in society and for me, the better impact is through",
  },
  {
    start: 29.76,
    end: 56.68000000000001,
    text: " technology.",
  },
  {
    start: 56.68,
    end: 59.84,
    text: " Our generation grew up with technology.",
  },
  {
    start: 59.84,
    end: 67,
    text: " Now it's grown to a stage that you can do a lot of things with it and it's a way of",
  },
  {
    start: 67,
    end: 69.03999999999999,
    text: " solving problems.",
  },
  {
    start: 69.03999999999999,
    end: 71.03999999999999,
    text: " So that's why I love it so much.",
  },
  {
    start: 71.03999999999999,
    end: 74.92,
    text: " It's organic, it grows as we do.",
  },
  {
    start: 74.92,
    end: 80.28,
    text: " So that's very fascinating.",
  },
  {
    start: 80.28,
    end: 81.28,
    text: " I'm Molly.",
  },
  {
    start: 81.28,
    end: 90.8,
    text: " I'm the CEO and founder of Velodash, a platform for cyclists to meet up and ride together.",
  },
  {
    start: 90.8,
    end: 97.24000000000001,
    text: " So I enjoy outdoor cycling just because you're with nature, but what's even better is that",
  },
  {
    start: 97.24000000000001,
    end: 104.88,
    text: " if you have people to enjoy this experience with you.",
  },
  {
    start: 104.88,
    end: 111.6,
    text: " Velodash is great for just planning the routes and letting who's joining have an idea what",
  },
  {
    start: 111.6,
    end: 113.32,
    text: " they will expect.",
  },
  {
    start: 113.32,
    end: 114.88,
    text: " Is it very difficult?",
  },
  {
    start: 114.88,
    end: 117.36,
    text: " Is it okayish?",
  },
  {
    start: 117.36,
    end: 122.24,
    text: " And then when you lose sight of your teammates, you don't have to worry because you can simply",
  },
  {
    start: 122.24,
    end: 140.68,
    text: " check the app and know their real-time location.",
  },
  {
    start: 140.68,
    end: 143.72,
    text: " When I was younger, I used to be really, really, really shy.",
  },
  {
    start: 143.72,
    end: 148.04,
    text: " Like I was the quiet one in school, even in family gatherings.",
  },
  {
    start: 148.04,
    end: 154.84,
    text: " I would just usually sit in one corner and just look at the floor.",
  },
  {
    start: 154.84,
    end: 158.35999999999999,
    text: " My brother helped me by doing videos with me.",
  },
  {
    start: 158.35999999999999,
    end: 161.76,
    text: " Okay, and next over here we have the TikTok Award.",
  },
  {
    start: 161.76,
    end: 169.79999999999998,
    text: " I was talking to the camera so that made me feel more comfortable if that makes sense.",
  },
  {
    start: 169.79999999999998,
    end: 176.16,
    text: " I'm Niana Guerrero and I'm a content creator from Quezon City, Philippines.",
  },
];
