export default function Profile() {
  const DummyData = {
    id: 1,
    name: "Alex Johnson",
    age: 35,
    occupation: "Freelance Web Developer",
    bio: "Experienced full-stack developer with a passion for crafting modern, responsive web applications. Specialized in JavaScript, React, and Node.js.",
    location: "Remote",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "MongoDB"],
    hourlyRate: "$50/hour",
    availability: "20 hours/week",
    servicesOffered: [
      "Website Development",
      "Web Application Design",
      "API Integration",
      "UI/UX Consultation",
    ],
    portfolioUrl: "https://www.alexjohnson.dev",
    contact: {
      email: "alex.johnson.freelance@example.com",
      phone: "+1 555 987 6543",
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alexjohnsondev",
      github: "https://github.com/alexjohnsondev",
    },
  };

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
