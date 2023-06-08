"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
function ShareFriends() {
  const [Content] = useState(["napo@gmail.com"]);

  const [ShowInvited, setShowInvited] = useState(false);

  const [TextInterface, setTextInterface] = useState("");
  useEffect(() => {
    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed
    let _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    let _INTERVAL_VAL: any = null;

    // Implements typing effect
    function Type() {
      var text = Content[_PART].substring(0, _PART_INDEX + 1);
      setTextInterface(text + " _");
      _PART_INDEX++;

      // If full sentence has been displayed then start to delete the sentence after some time
      if (text === Content[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setShowInvited(true);
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Delete, 100);
        }, 1000);
      }
    }

    // Implements deleting effect
    function Delete() {
      var text = Content[_PART].substring(0, _PART_INDEX - 1);
      setTextInterface(text + " _");
      _PART_INDEX--;

      // If sentence has been deleted then start to display the next sentence
      if (text === "") {
        clearInterval(_INTERVAL_VAL);

        setShowInvited(false);

        // If last sentence then display the first one, else move to the next
        if (_PART == Content.length - 1) _PART = 0;
        else _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
          _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
      }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);
  }, [Content, setShowInvited]);
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen gap-5 p-3">
        <div className="md:grid md:h-screen md:place-content-center">
          <div className="text-3xl md:text-4xl font-extrabold mb-5 mt-5 text-[#C9D1D9] text-center md:text-start">
            <p>Share folders with your friends</p>
          </div>
          <div className="max-w-screen-sm m-auto">
            <p id="description" className="text-xl font-normal">
              We promote collaboration, simply write your {"friend's"} email,
              assign them permissions, and they will receive an invitation.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#363141] px-5 py-5 w-[50rem] rounded-md shawdow-modal">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-bold">Share Podcasts</h1>
              <button
                role="button"
                type="button"
                className="text-gray-400 bg-transparent hover:text-[#c4c1d0] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <p>Write the email of the person you want to share the file.</p>

            <br />
            <label htmlFor="name">
              Add people
              <div
                className={`mt-2 appearance-none border border-gray-700 focus:border-red-300 bg-white rounded-lg w-full py-3 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline`}
              >
                <p>{TextInterface}</p>
              </div>
            </label>

            <p className="mt-5 mb-5">People who have access</p>

            <div className="scroll-modal-shared">
              <div className="flex justify-between rounded-lg hover:bg-[#363141] mr-2">
                <div className="inline-flex gap-2 items-center">
                  <div>
                    <Image
                      className="rounded-full"
                      width={40}
                      height={40}
                      src={"/nelsoncode.jpg"}
                      alt={""}
                    />
                  </div>

                  <div className="w-auto md:w-60">
                    <p>Nelson Hernandez</p>
                    <p>nelson@gmail.com</p>
                  </div>
                </div>

                <div>
                  <button
                    role="button"
                    type="button"
                    className="inline-flex gap-1 p-3"
                  >
                    Owner
                  </button>
                </div>
              </div>

              {ShowInvited && (
                <div className="flex justify-between rounded-lg hover:bg-[#363141] mr-2 animationin mt-2">
                  <div className="inline-flex gap-2 items-center">
                    <div>
                      <Image
                        className="rounded-full"
                        width={40}
                        height={40}
                        src={"/napoleon.jpg"}
                        alt={""}
                      />
                    </div>

                    <div className="w-auto md:w-60">
                      <p>Napoleón Pérez</p>
                      <p>napo@gmail.com</p>
                    </div>
                  </div>

                  <div>
                    <button
                      role="button"
                      type="button"
                      className="inline-flex gap-1 p-3"
                    >
                      Reader
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <div>
                <button
                  role="button"
                  id="submit-users-btn-modal"
                  type="submit"
                  className={`select-none text-black hover:shadow-md bg-[#74F9BE] hover:bg-black hover:text-white focus:outline-none font-medium rounded-lg inline-flex items-center px-5 py-2.5 mb-2 mt-2 border border-transparent`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 -ml-1 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareFriends;
