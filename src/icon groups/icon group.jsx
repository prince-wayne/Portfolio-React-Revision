export default function IconGroup(props) {
  if (!props) {
    console.error("No props passed down");
    throw new Error("No props passed down");
  }

  const { icon, skills } = props;

  if (!icon) {
    console.error("Icon, not in given props or addressed incorrectly");
    throw new Error(
      "icon not defined within given props, or addressed incorrectly"
    );
  }

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    console.error("missing skills prop, not an array or empty");
    throw new Error("skills prop is missing, not an array, or empty");
  }

  return (
    <>
      { !isGrid && <img src={icon} alt="" /> }
      <div className={"skill-icons-container inline-icons" + isGrid ? "section-grid" : "section-rows"}>
        {skills.map(
          (ele, index) =>
            (<img className = "skill-icon " src = {ele} key = {index}/>)
        )}
      </div>
    </>
  );
}
