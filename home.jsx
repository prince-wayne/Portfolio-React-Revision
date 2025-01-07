// this would be the home page, i did forget the template app.jsx file structure but it's just a compondent to be loaded into index.js
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export default function Home() {
  const icons = {
    frontend: null,
    backend: null,
    tools: null,
  };
  const skills = {
    frontend: {
      icons: [],
      sectional: "",
    },
    backend: {
      icons: [],
      sectional: "",
    },
    tools: {
      icons: [],
      sectional: "",
    },
  };

  return (
    <>
      {/* returns a fragment */}

      <section id="home-hero-section" className = "hero-section">
        <img />{" "}
        {/* background image could just use the css property or could make the overlay absolute. */}
        <div id="hero-section-overlay" className="overlay" >
          <h1>Turning Ideas into Interactive Experiences.</h1>
          <p>
            A Front-End Developer specializing in building responsive,
            userfocused websites. Let’s createsomething amazing together.
            {/* This hero section doesn't flow correctly double check the design file for a mistake of headers */}
          </p>
          <div id="hero-section-overlay-btns">
            <button>
              {" "}
              {/* this is a cta buttonn but I be saying cat a lot. */}
              Veiw My Work
            </button>
            <button>Contact Me</button>
          </div>
        </div>
      </section>

      <section id="introduction">
        <img src="" alt="" />
        <h2>Hi, I'm Tyshawn, a Passionate Front-End developer</h2>
        <p>
          I craft clean, responsive, and dynamic websitesthat bring ideas to
          life. With expertise in HTML,CSS, JavaScript, and React, I focus on
          creatingseamless user experiences and visually strikinginterfaces.
          Whether you're a business looking fora website or an employer seeking
          talent, I’m here to help build your vision.
        </p>
      </section>
      <section id = "Skills">
        <h2>Skills and Expertise</h2>
        <p>
          Here are the technologies and tools I use to create functional and
          engaging websites:
        </p>
        {/* 
            The compondent below will be [
                icon, 
                skills [{skill, level}...]
            ] 
            */}
				<skillGroups/>
        
        <p>
          I bring a versatile skill set to front-end development, combining
          technical expertise with problem-solving and adaptability. Proficient
          in core web technologies like JavaScript (green), I am actively
          expanding my knowledge in React (yellow) to build dynamic applications
          and occasionally practicing Bash scripting (grey) to enhance my
          workflow. My approach prioritizes responsive design, accessibility,
          and engaging user interfaces, complemented by strong and collaboration
          skills that enable me to adapt to diverse challenges.
        </p>
      </section>
			<section id="recent-projects-section">
				{
				/* 
					this is going to be the simple hard thing on this page  
					we want to create a compondent that will fade out the current section as the card fades out, I'm think of a card fall off like a deck of cards 
					----
					|--|
					|--|
					----

					   -
						-    -
					 -         -
					-              -
					    -         -
							    -    -   
									   - 
					
					-45 degress or almost flat unsure. fades out, revealing card behind it. 
				*/
				}
				<h2>Recent Projects & Learning Highlights</h2>
				<projectsDisplay/>
			</section>
			<section id = "contact-section">
				<h2>Let's Work Together</h2>
				<img src="" alt="" />
				<p>
					Whether you’re interested in hiring me for a full-time position, collaborating on a project, or just want to say hi, feel free to reach out.
				</p>
				<div id = "contact-section-social-media-icon-box" className="inline-icons">
					{/* we could really make this section a compondent to help with the other ones above */}
					<img src="" alt="" />
					<img src="" alt="" />
					<img src="" alt="" />
				</div>
				<button onclick = {openContactPopUp()}>
					Send a Message
				</button>
			</section>
    </>
  );
}
