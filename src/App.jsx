import ProfileCard from './Components/ProfileCard'

function App() {
  const profiles = [
    {
      name: "Sangeeth Kumar",
      place: "Chennai",
      role: "Web Developer / UI&UX Designer",
      image: "",
      status: true,
      skills: ["HTML", "Figma"]
    },
    {
      name: "Resin",
      place: "Chennai",
      role: "Lawer",
      image: "",
      status: false,
      skills: ["LLB"]
    },
    {
      name: "Bala",
      place: "Chennai",
      role: "Web Developer / UI&UX Designer",
      image: "",
      status: true,
      skills: ["JavaScript", "React", "Adobe Photoshop"]
    }, 
    {
      name: "Aravinth",
      place: "Coimbatore",
      role: "Software Developer",
      image: "",
      status: false,
      skills: ["Python", "Machine Learning", "AI"]
    }
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name} 
          place={profile.place} 
          role={profile.role} 
          image={profile.image} 
          status={profile.status}
          skills={profile.skills} 
        />
      ))}
    </>
  );
}

export default App;