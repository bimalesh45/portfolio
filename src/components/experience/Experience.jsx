import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVA SCRIPT </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NEXT JS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVA SCRIPT </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NEXT JS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NODE JS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>EXPRESS JS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MongoDB 🍃 (NoSQL) & MySQL 🧾 (SQL)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__programming">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>TYPE SCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>REACT JS & NEXT JS </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
