// we gotta load in the projects, our old portfolio should have the data file.
import { useState, useEffect, useRef } from "react";

async function loadDataFile(path) {
  try {
    const response = await fetch(path);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return [];
  }
  // function from older project
}

export default function ProjectDisplay() {
  const projectData = useRef(null);

  const [Display, setDisplay] = useState({});
  const [selection, setSelction] = useState(0);

  const [status, setStatus] = useState(false);

  useEffect(() => {
    loadDataFile("./Data/pokemon.json").then((res) => {
      pokemonData.current = res;
      setSelction(0);
      setStatus(true);
    });
  }, []); 
  
  function handleLoad() {
    if (status) {
      return <div className="card-container">
        <img src={image.src} alt = {image.alt}/>

        <h4>{Title}</h4>
        <p>{Description}</p>

        <ul>
        {Tags.map((ele, index) =`<li key = ${index}> ${ele} </li>`)}
        </ul>

        <a href={link.project}>
        <button> Veiw Project </button>
        </a>

        <a href={links.codebase}>
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



  return <div className="projects-sections">
    <h2>Recent Projects & Learning Highlights</h2>
    <img src="" alt="" onClick={handleBtnClick("back")}/> {/* left button */}
    {handleLoad()}
    <img src="" alt="" onClick={handleBtnClick("next")}/> {/* right btn */}
    {/* This will require conditional rendering,  */}
    <div className="dot-inditicators">
        <div className="dot-inditicator"></div>
        <div className="dot-inditicator"></div>
        <div className="dot-inditicator"></div>
    </div>
  </div>
}


/* 
    compondent process,
    display wait message
    load projects
    allow selection via btns LR
    Display selection with the dot inditicator

*/