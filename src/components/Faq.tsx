"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`} />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What types of loans does Zabam Loans offer?",
    answer:
      "We offer a variety of non-bank loans, including personal loans, business loans, and loans for home renovations, tailored to meet your financial needs.",
  },
  {
    question: "How quickly can I get approved for a loan?",
    answer:
      "Our approval process is designed to be fast and efficient. In many cases, you can receive approval within hours after submitting your application.",
  },
  {
    question: "What documents do I need to apply for a loan?",
    answer:
      "Typically, you will need to provide proof of income, identification, and any relevant financial documents, depending on the type of loan you’re applying for.",
  },
  {
    question: "Are there any prepayment penalties for paying off my loan early?",
    answer:
      "No, Zabam Loans does not charge prepayment penalties, allowing you to pay off your loan early without incurring additional fees.",
  },
];
