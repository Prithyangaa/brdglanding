import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    q: "What is brdgthegap?",
    a: "brdgthegap is a free to use platform designed to connect skilled individuals with opportunities in a seamless and efficient way."
  },
  {
    q: "How much does it cost to use brdgthegap?",
    a: "There are no costs, fees, or subscriptions. brdgthegap is completely free to use."
  },
  {
    q: "How do I sign up?",
    a: "You can sign up by filling out the pre-launch waiting list form available on our website."
  },
  {
    q: "What happens after I sign up?",
    a: "Once you join the waiting list, you will receive updates and early access information before the platform officially launches."
  },
  {
    q: "How does brdgthegap verify users?",
    a: "We implement measures to ensure trust and reliability on our platform, but further details will be provided closer to launch."
  },
  {
    q: "Can businesses use brdgthegap?",
    a: "Yes, businesses will be able to engage with skilled individuals through the platform. Additional details will be shared upon launch."
  },
  {
    q: "How can I contact support?",
    a: "For inquiries, please email contact@brdgthegap.com."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-question">{item.q}</span>
              <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
