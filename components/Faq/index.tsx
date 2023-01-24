import React from "react";

function Faq() {
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center md:text-start">
          <div className="text-2xl md:text-4xl font-bold">
            <span>Frequent asked questions</span>
          </div>

          <p className="mt-2 text-base font-normal mb-4 m-3 md:m-0">
            These are frequently asked questions that we have collected, if you
            have any suggestions or questions do not hesitate to send us an
            email to the support team.
          </p>
        </div>
        <div>
          {faqs.map(({ id, question, answer }) => {
            return (
              <div key={id} className="w-full px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold text-xl cursor-pointer border border-slate-300 rounded-md py-2 px-4 mb-3">
                    {question}
                  </summary>
                  <div className="text-base font-normal">{answer}</div>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;

const faqs = [
  {
    id: 1,
    question: "What is DenoLyrics?",
    answer: `Super takes your Notion pages and turns them in to a high
    performing, fast, SEO-optimized website. This means you
    manage your content in Notion and you manage your site in
    Super. Well, actually, Super takes care of most of the
    website building automatically, and this is what makes using
    Super feel magical.`,
  },
  {
    id: 2,
    question: "What data does DenoLyrics send to the cloud?",
    answer: `Super takes your Notion pages and turns them in to a high
    performing, fast, SEO-optimized website. This means you
    manage your content in Notion and you manage your site in
    Super. Well, actually, Super takes care of most of the
    website building automatically, and this is what makes using
    Super feel magical.`,
  },
  {
    id: 3,
    question: "DenoLyrics minimum system requirements?",
    answer: `Super takes your Notion pages and turns them in to a high
    performing, fast, SEO-optimized website. This means you
    manage your content in Notion and you manage your site in
    Super. Well, actually, Super takes care of most of the
    website building automatically, and this is what makes using
    Super feel magical.`,
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: `Super takes your Notion pages and turns them in to a high
    performing, fast, SEO-optimized website. This means you
    manage your content in Notion and you manage your site in
    Super. Well, actually, Super takes care of most of the
    website building automatically, and this is what makes using
    Super feel magical.`,
  },
];
