import { v4 as uuidv4 } from "uuid";

export const exampleData = {
  profile: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "95287xxxxx",
    address: "Ascension Island",
    about: "A passionate software developer with a knack of solving problem.",
  },
  education: [
    {
      id: uuidv4(),
      school: "XYZ University",
      degree: "Bachelor of Computer Science",
      startYear: "2018",
      endYear: "2022",
      location: "New York, NY",
      marks: "3.8 GPA",
    },
    {
      id: uuidv4(),
      school: "ABC High School",
      degree: "High School Diploma",
      startYear: "2016",
      endYear: "2018",
      location: "New York, NY",
      marks: "97%",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      startDate: "June 2022",
      endDate: "Present",
      keypoints: [
        {
          id: uuidv4(),
          text: "Developed a scalable web application using React and Node.js",
        },
        {
          id: uuidv4(),
          text: "Implemented REST APIs and optimized backend performance",
        },
        {
          id: uuidv4(),
          text: "Collaborated with cross-functional teams to deliver projects on time",
        },
      ],
    },
    {
      id: uuidv4(),
      jobTitle: "Intern",
      company: "StartUp Hub",
      startDate: "May 2022",
      endDate: "June 2022",
      keypoints: [
        {
          id: uuidv4(),
          text: "Assited in building a mobile application using React native",
        },
        {
          id: uuidv4(),
          text: "Conducted user testing and resolved key UI/UX issues",
        },
      ],
    },
  ],
  projects: [
    {
      id: uuidv4(),
      name: "Portfolio Website",
      keypoints: [
        {
          id: uuidv4(),
          text: "Designed and developed a personal portfolio website",
        },
        {
          id: uuidv4(),
          text: "Deployed the website using Netlify",
        },
      ],
      techStack: "React, CSS, Netlify",
    },
    {
      id: uuidv4(),
      name: "E-Commerce Platform",
      keypoints: [
        {
          id: uuidv4(),
          text: "Built a feature-rich e-commerce platfrom with payment gateway integration",
        },
        {
          id: uuidv4(),
          text: "Implemeted state management using Redux",
        },
      ],
      techStack: "React, Redux, Express, MongoDB",
    },
  ],
  skills: [
    {
      id: uuidv4(),
      name: "javascript",
    },
    {
      id: uuidv4(),
      name: "React",
    },
    {
      id: uuidv4(),
      name: "Node.js",
    },
    {
      id: uuidv4(),
      name: "Express",
    },
    {
      id: uuidv4(),
      name: "MongoDB",
    },
    {
      id: uuidv4(),
      name: "CSS",
    },
    {
      id: uuidv4(),
      name: "Git",
    },
    {
      id: uuidv4(),
      name: "Docker",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      title: "Hobbies",
      description: "Photography, Hiking and reading tech blogs",
    },
    {
      id: uuidv4(),
      title: "Languages",
      description: "English, Spanish and French",
    },
  ],
};
