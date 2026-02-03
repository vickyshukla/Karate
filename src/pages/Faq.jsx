const faqItems = [
  {
    id: "faqOne",
    question: "Do I need prior experience to join?",
    answer:
      "No. Our beginner track starts with fundamentals and we match you to a level-appropriate class on day one.",
  },
  {
    id: "faqTwo",
    question: "What should I bring to my first class?",
    answer:
      "Wear comfortable athletic clothing and bring a water bottle. We provide loaner gloves and starter uniforms.",
  },
  {
    id: "faqThree",
    question: "Are there classes for kids and teens?",
    answer:
      "Yes. We have youth programs for ages 5-8, 9-12, and teens with structured belt progression.",
  },
  {
    id: "faqFour",
    question: "How do belt promotions work?",
    answer:
      "Students are evaluated every 8-12 weeks. Instructors track attendance, technique, and discipline.",
  },
];

export const Faq = () => {
  return (
    <section className="container mt-5 faq-section" id="faq">
      <div className="section-heading">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before stepping onto the mat.</p>
      </div>
      <div className="accordion" id="faqAccordion">
        {faqItems.map((item, index) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`${item.id}-heading`}>
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}-collapse`}
                aria-expanded={index === 0}
                aria-controls={`${item.id}-collapse`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`${item.id}-collapse`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`${item.id}-heading`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
