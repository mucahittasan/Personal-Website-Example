import React, { useEffect } from "react";
import skills from "../skills";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up" className="main-header">
        <span>{"<"}</span>
        About
        <span>{">"}</span>
      </h2>

      <div className="about-content container">
        <p data-aos="zoom-in" className="description">
          Hey there <span>👋</span> , I'm Mucahit. If I have to talk about
          myself briefly, I can say that I am determined, hardworking, ambitious
          and able to produce fast solutions. I love teaching and learning. I
          have been working in the field of web development for 2 years and I
          have been doing projects.
        </p>



        <h3 data-aos="fade-down" className="skills-header">
          <span>{"<"}</span>
          Skills
          <span>{">"}</span>

        </h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <div data-aos="zoom-in" key={index} className="skil">
              <div className="skill-title">
                <div>{skill.name}</div>
                <div>{skill.per}</div>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  style={{ maxWidth: `${skill.per}` }}
                  per={skill.per}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
