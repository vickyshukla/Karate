import karateOne from "../images/karate-1.jpg";
import karateTwo from "../images/karate-2.jpg";
import karateThree from "../images/karate-3.jpg";

const instructors = [
  {
    name: "Sensei Arjun Patel",
    title: "Head Instructor • 4th Dan",
    focus: "Shotokan foundations, kata refinement, and mindset coaching.",
    image: karateOne,
  },
  {
    name: "Coach Mira Rao",
    title: "Kickboxing Specialist",
    focus: "Conditioning, pad work, and tactical sparring for all levels.",
    image: karateTwo,
  },
  {
    name: "Sensei Kenji Nakamura",
    title: "Self-Defense Lead",
    focus: "Real-world awareness, escapes, and practical defense drills.",
    image: karateThree,
  },
];

export const Instructors = () => {
  return (
    <section className="container mt-5 instructors-section" id="instructors">
      <div className="section-heading">
        <h2>Meet Our Instructors</h2>
        <p>
          Train with certified black belts who personalize every class to help
          you build confidence, discipline, and real-world skills.
        </p>
      </div>
      <div className="row g-4">
        {instructors.map((instructor) => (
          <div className="col-md-4" key={instructor.name}>
            <div className="card instructor-card">
              <img
                src={instructor.image}
                className="card-img-top"
                alt={instructor.name}
              />
              <div className="card-body">
                <h3 className="card-title">{instructor.name}</h3>
                <p className="card-subtitle">{instructor.title}</p>
                <p className="card-text">{instructor.focus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
