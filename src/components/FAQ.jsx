'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-linen last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-start text-left hover:text-gold transition-colors"
      >
        <h3 className="text-lg font-serif text-deep pr-4 font-semibold">{question}</h3>
        <span className="text-gold text-2xl flex-shrink-0 mt-1">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-4">
          <p className="text-base text-deep leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What's included in a day with Andy?",
      answer:
        "Everything. Green fee, tee time, lunch at the course restaurant, and 18 holes of on-course coaching woven throughout your round. You play alongside Andy—not taking lessons on the range. Strategy, pressure situations, real-course decisions. Post-round debrief too.",
    },
    {
      question: "Do I need a specific handicap to play with Andy?",
      answer:
        "No handicap requirement. You need to be keen to improve and willing to engage with real decisions on the course. Andy's coached players from 2-handicap golfers to complete beginners visiting Mallorca. The philosophy is the same: honest feedback, smart course management, play the hole in front of you—not the one in your head.",
    },
    {
      question: "Why choose this over booking a tee time myself?",
      answer:
        "You get insight into what calculations go into each shot—not just being told to swing better. Real-course strategy: reading greens, managing risk, pressure. A PGA Advanced Professional with 20+ years' experience playing alongside you. Course selection matched to your game. You discover your own ceiling.",
    },
    {
      question: "Can I book multiple days or customise the trip?",
      answer:
        "Yes. The Full Experience is completely bespoke: multiple courses over 3–7 days, private transport from Palma, dinners at handpicked restaurants, concierge support. Build your golf trip around how you actually want to play and live. Get in touch and we'll plan it together.",
    },
    {
      question: "What courses will we play?",
      answer:
        "It depends on your game and what you want to experience. Andy has played all 22 courses on the island and builds rounds on Son Gual, Alcanada, and Santa Ponsa courses most often. He matches course to your handicap and goals—not every golfer should play the same track. See the full course guide or get in touch to discuss.",
    },
  ];

  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-deep mb-2 font-semibold">
          Questions?
        </h2>
        <p className="text-lg text-taupe mb-12">
          Here's what golfers planning a Mallorca round usually ask.
        </p>

        <div className="bg-white border border-linen rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-taupe mb-4">Can't find what you're looking for?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-deep text-deep font-sans hover:bg-deep hover:text-cream transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
