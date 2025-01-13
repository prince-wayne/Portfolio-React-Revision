import IconGroup from "./icon group.jsx"


export default function SkillGroups() {
  // placeholder values
  const icons = {
    frontend: {
      skills: ['React', 'JavaScript', 'HTML', 'CSS'], 
      sectionIcon: "/images/frontend.svg", 
    },
    backend: {
      skills: ['Node.js', 'Python', 'Java', 'Go'], 
      sectionIcon: "/images/backend.svg", 
    },
    tools: {
      skills: ['Git', 'Docker', 'AWS', 'Azure'], 
      sectionIcon: "/images/tools.svg", 
    },
  };

  return (
    <div>
    <IconGroup isGrid = "false" icon={icons.frontend.sectionIcon} skills={icons.frontend.skills} />
    <IconGroup isGrid = "false" icon={icons.backend.sectionIcon} skills={icons.backend.skills} />
    <IconGroup isGrid = "false" icon={icons.tools.sectionIcon} skills={icons.tools.skills} />
    {/* isGrid is a conditional rendering using class name */}
  </div>
  );
}

// style is something i almost always do last, but I always structure with the intention of future styles. 
// this compondent will have two styles, one grid, and one with three seperate rows, the section icon won't remain in the gird

