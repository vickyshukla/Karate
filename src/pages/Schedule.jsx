import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsap";

const schedule = [
  {
    day: "Monday",
    classes: "6:30 AM Fundamentals, 6:00 PM Youth Karate, 7:30 PM Sparring",
  },
  {
    day: "Tuesday",
    classes: "7:00 AM Strength & Mobility, 6:30 PM Kickboxing, 8:00 PM Kata",
  },
  {
    day: "Wednesday",
    classes: "6:30 AM Fundamentals, 6:00 PM Teen Karate, 7:30 PM Self-Defense",
  },
  {
    day: "Thursday",
    classes: "7:00 AM Conditioning, 6:30 PM Advanced Karate, 8:00 PM Weapons",
  },
  {
    day: "Friday",
    classes: "6:00 PM Open Mat, 7:00 PM Belt Prep Clinic",
  },
  {
    day: "Saturday",
    classes: "8:00 AM Family Class, 10:00 AM Black Belt Training",
  },
];

export const Schedule = () => {
  const scheduleRef = useRef(null);

  useEffect(() => {
    if (!gsap) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(".schedule-section .schedule-row", {
        scrollTrigger: {
          trigger: ".schedule-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.15,
      });
    }, scheduleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="schedule-section" id="schedule" ref={scheduleRef}>
      <div className="container">
        <div className="section-heading">
          <h2>Weekly Schedule</h2>
          <p>
            Classes are organized by experience level and age. Join any session or
            request a custom training plan.
          </p>
        </div>
        <div className="schedule-table">
          {schedule.map((item) => (
            <div className="schedule-row" key={item.day}>
              <div className="schedule-day">{item.day}</div>
              <div className="schedule-classes">{item.classes}</div>
            </div>
          ))}
        </div>
        <div className="schedule-note">
          <strong>Need flexibility?</strong> Private coaching and corporate safety
          workshops are available by appointment.
        </div>
      </div>
    </section>
  );
};
