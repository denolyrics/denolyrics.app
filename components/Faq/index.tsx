function Faq() {
  return (
    <div className="grid md:h-[70vh] place-content-center p-3">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-3xl md:text-4xl font-bold mb-5 mt-5 text-[#C9D1D9] text-center md:text-left">
              Frequent asked questions
            </p>

            <p className="mt-2 text-xl font-normal mb-4 md:m-0">
              These are frequently asked questions that we have collected, if
              you have any suggestions or questions do not hesitate to send us
              an email to the support team.
            </p>
          </div>
          <div>
            {faqs.map(({ id, question, answer }) => {
              return (
                <div key={id} className="w-full md:px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold text-xl cursor-pointer border border-slate-300 rounded-md py-2 px-4 mb-3">
                      {question}
                    </summary>
                    <div className="text-xl font-normal">{answer}</div>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;

export const faqs = [
  {
    id: 1,
    question: "What is DenoLyrics?",
    answer: `Is an Artificial Intelligence app that uses the large scale model
    Whisper, to perform real time speech recognition, Whisper is an automatic speech recognition 
    (ASR) system trained on 680,000 hours of multilingual and multitask 
    supervised data collected from the web. We show that the use of such a 
    large and diverse dataset leads to improved robustness to accents, 
    background noise and technical language.`,
  },
  {
    id: 2,
    question: "What data does DenoLyrics send to the cloud?",
    answer: `We don't ask for personal information unless we really need it. We keep information on your personal information when you log in, create folders, upload files and acquire our payment plans`,
  },
  {
    id: 3,
    question: "DenoLyrics minimum system requirements?",
    answer: `You don't need to install anything everything run on the cloud in real time
    you will receive audio transcription.`,
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: `We use PayPal as our main platform and also Wompi (Banco Agrícola)`,
  },
];
