"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I contact VIPA App Studio?",
    answer:
      "You can reach us by email through our support address. We aim to respond to all inquiries within 24–48 hours.",
  },
  {
    question: "How do I report a bug or technical issue?",
    answer:
      "Please include the app name, your device model, Android version, and a brief description of the issue. Screenshots are also helpful.",
  },
  {
    question: "Can I request a new feature?",
    answer:
      "Absolutely! We welcome feature suggestions and continuously improve our apps based on user feedback whenever possible.",
  },
  {
    question: "How do I request deletion of my data?",
    answer:
      "If one of our apps stores personal information, you can contact us to request deletion of your data. We will process eligible requests in accordance with our Privacy Policy.",
  },
  {
    question: "Where can I download your apps?",
    answer:
      "All official VIPA App Studio applications are available on the Google Play Store through our developer page.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Here are answers to some of the most common questions about our
            applications and support.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="border-t border-slate-100 px-6 py-5 text-slate-600 leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}