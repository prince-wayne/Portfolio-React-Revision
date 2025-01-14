// we gotta load in the projects, our old portfolio should have the data file.
import { useState, useEffect, useRef, Children } from "react";

async function loadDataFile(path) {
  // If I used random number I could easily have log infomation every 1/10 runs.
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return []; // an empty array isn't acceptable in this moment. but it's how we'll use it as a check
  }
  // function from older project, nearly no changes.
}

export default function ProjectDisplay() {
  const [status, setStatus] = useState(false);
  const projectData = useRef(null);
  const [dataInvalid, setDataInvalid] = useState(false);
  const [selection, setSelction] = useState(0);
  const [dots, setDots] = useState([
    "active",
    "inactive",
    "inactive",
    "inactive",
  ]);

  useEffect(() => {
    loadDataFile("/public/data/projects.json").then((res) => {
      projectData.current = res;
      setSelction(0);
      setStatus(true);
      if (Array.isArray(res) && res.length == 0) {
        setDataInvalid(true);
      }
    });
  }, []);

  // sets the  dot status in relation to the project selection
  useEffect(() => {
    let carry = [1, 2, 3, 4]; // carries the incoming value
    carry.fill("inactive", 0, 4); // in order for it to work we need a current length of four, we'll look closer during day hours with internt access.
    let length = projectData.current.length - 1; // readability
    let relation = [
      selection == 0,
      selection == 1,
      selection == length - 1,
      selection == length - 2,
    ]; // corresponding t/f
    relation.every((ele) => ele == false) ? (relation[2] = true) : null; // check for middle ground
    let transfer = relation.indexOf(true);
    carry[transfer] = "active";
    setDots(carry);
  }, [selection]);

  function handleLoad() {
    if (status) {
      const { image, title, tags, link, description } =
        projectData.current[selection];
      const { project, codebase } = link;

      return (
        <div className="card-container">
          <img src={image} alt={description.short} />

          <h4>{title}</h4>
          <p>{description.long}</p>

          <ul>
            {tags.map((ele, index) => (
              <li key={index}> {ele} </li>
            ))}
          </ul>

          <a href={project}>
            <button> Veiw Project </button>
          </a>

          <a href={codebase}>
            <button> View Codebase </button>
          </a>
        </div>
      );
    }
    if (dataInvalid && status) {
      return (
        <div className="invalid-data">
          <h3>
            Sorry there seems to be an issue with our data processing, try
            refreshing your page please.
          </h3>
          <p> If this continues please let us know and we'll fix it soon.</p>
        </div>
      );
    } else {
      return <h4 className="wait">Please Wait</h4>;
    }
  }

  function handleBtnClick(btn) {
    if (btn === "back") {
      if (selection === 0) {
        setSelction(projectData.current.length - 1);
      } else {
        setSelction((c) => c - 1);
      }
    }
    if (btn === "next") {
      if (selection === projectData.current.length - 1) {
        setSelction(0);
      } else {
        setSelction((c) => c + 1);
      }
    }
  }

  return (
    <section className="projects-section">
      {Children}
      <img src="" alt="last project" onClick={handleBtnClick("back")} />
      {/* left button */}
      {handleLoad()}
      <img src="" alt="next project" onClick={handleBtnClick("next")} />
      {/* right btn */}
      <div className="dot-inditicators">
        {/* stlyed by class conditional */}
        <div className={`dot-inditicator ${dots[0]}`}></div>
        <div className={`dot-inditicator ${dots[1]}`}></div>
        <div className={`dot-inditicator ${dots[2]}`}></div>
        <div className={`dot-inditicator ${dots[3]}`}></div>
      </div>
    </section>
  );
}
