export default function SkillGroup(props) {
  const { icon, skills } = props;

  return (
    <>
      <img src={icon} alt="" />
      <div className="skill-icons-container inline-icons">
        {skills.map(
          (ele, index) =>
            `<img className = "skill-icon"src = ${ele} key = ${index}/>`
        )}
      </div>
    </>
  );
}
