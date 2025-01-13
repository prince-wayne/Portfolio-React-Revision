// we gotta load in the projects, our old portfolio should have the data file.
import { useState, useEffect, useRef } from "react";

async function loadDataFile(path) {
  // If I used random number I could easily have log infomation every 1/10 runs. 
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return [];
  }
  // function from older project, nearly no changes. 
}

export default function ProjectDisplay() {
  const projectData = useRef(null);
  const [selection, setSelction] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    loadDataFile("/public/data/projects.json").then((res) => {
      projectData.current = res;
      setSelction(0);
      setStatus(true);
    });
  }, []); 

  useEffect(() => {
    if (selection == 0) {
      setDotStatus(
        ["active", "inactive", "inactive", "inactive"]
      )
    } else if (selection >= 1 && selection <= length - 2) {
      setDotStatus(
        ["inactive", "active", "inactive", "inactive"]
      )
    } else if (selection > length - 2 && selection < length - 1) {
      setDotStatus(
        ["inactive", "inactive", "active", "inactive"]
      )
    } else if (selection == length) {
      setDotStatus(
        ["inactive", "inactive", "inactive", "active"]
      )
    }
  }, [selection]);

  function handleLoad() { 
    if (status) {
      const {image, title, tags, link, description} = projectData.current[selection];
      const {project, codebase} = link;

      return <div className="card-container">
        <img src={image} alt = {description.short}/>

        <h4>{title}</h4>
        <p>{description.long}</p>

        <ul>
          {tags.map((ele, index) =`<li key = ${index}> ${ele} </li>`)}
        </ul>

        <a href={project}>
          <button> Veiw Project </button>
        </a>

        <a href={codebase}>
          <button> View Codebase </button>
        </a>
      </div>
    } else {
      return <h4 className="wait">Please Wait</h4>;
    }
  }
 
  function handleBtnClick(btn) {
    if (btn === "back") {
      if (selection === 0) {
        setSelction(pokemonData.current.length - 1);
      } else {
        setSelction((c) => c - 1);
      }
    }
    if (btn === "next") {
      if (selection === pokemonData.current.length - 1) {
        setSelction(0);
      } else {
        setSelction((c) => c + 1);
      }
    }
  }

  return <div className="projects-section">
    <h2>Recent Projects & Learning Highlights</h2>
    <img src="" alt="last project" onClick={handleBtnClick("back")}/> {/* left button */}
    {handleLoad()}
    <img src="" alt="next project" onClick={handleBtnClick("next")}/> {/* right btn */}
    {/* This will require conditional rendering,  */}
    <div className="dot-inditicators">
        <div className={`dot-inditicator ${dotStatus[0]}`}></div>
        <div className={`dot-inditicator ${dotStatus[1]}`}></div>
        <div className={`dot-inditicator ${dotStatus[2]}`}></div>
        <div className={`dot-inditicator ${dotStatus[3]}`}></div> {/* not in the original design plan, but having the middle remain "lighten" through the entire selection. */}
    </div>
  </div>
}
