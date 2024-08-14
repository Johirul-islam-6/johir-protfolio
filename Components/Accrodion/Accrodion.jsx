"use client";
import { useState } from "react";

export const Accrodion = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const [bannerOpen, setBannerOpen] = useState(true);

  const faqItems = [
    {
      question: "What are the advantages of your service?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question:
        "Are there any fees or commissions in addition to the monthly subscription?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question: "You really don't charge per user? Why not?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question: "What happens when I go over my monthly active limit?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question:
        "Can your service help me understand how to work with my product?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question: "Which third-party application do you integrate with?",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
    {
      question: "I have another question!",
      answer:
        "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    },
  ];

  return (
    <div className="relative font-inter antialiased">
      <main className="relative  flex flex-col justify-center bg-color overflow-hidden">
        <div className="w-full  mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

          <div className="divide-y divide-slate-200">
            {faqItems.map((item, index) => (
              <div key={index} className="py-2">
                <h2>
                  <button
                    id={`faqs-title-${index}`}
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expandedItems[index]}
                    aria-controls={`faqs-text-${index}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      className="fill-indigo-500 shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          expandedItems[index] ? "!rotate-180" : ""
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          expandedItems[index] ? "!rotate-180" : ""
                        }`}
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`faqs-text-${index}`}
                  role="region"
                  aria-labelledby={`faqs-title-${index}`}
                  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[index]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-3">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
        <a
          className="text-xs text-slate-500 hover:underline"
          href="https://cruip.com"
        >
          &copy;Cruip - Tailwind CSS templates
        </a>
      </footer>

      <div
        className={`fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50 ${
          bannerOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-slate-300"
              href="https://cruip.com/building-a-simple-animated-accordion-component-with-tailwind-css/"
              target="_blank"
              rel="noreferrer"
            >
              Read Tutorial
            </a>
            <span className="italic px-1.5">or</span>
            <a
              className="font-medium hover:underline text-indigo-500 flex items-center"
              href="https://github.com/cruip/cruip-tutorials/blob/main/animated-accordion/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download</span>
              <svg
                className="fill-indigo-400 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
              >
                <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
              </svg>
            </a>
          </div>
          <button
            className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700"
            onClick={() => setBannerOpen(false)}
          >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
