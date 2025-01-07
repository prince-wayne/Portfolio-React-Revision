import SkillGroup from "./skillgroup.jsx"


export default function SkillGroups() {
  return (
    <div>
      <SkillGroup icon={icons.frontend} skills={skills.frontend} />
      <SkillGroup icon={icons.tools} skills={skills.tools} />
      <SkillGroup icon={icons.backend} skills={skills.backend} />
    </div>
  );
}

// style is something i almost always do last, but I always structure with the intention of future styles. 
