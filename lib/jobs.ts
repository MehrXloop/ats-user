// dummyData.ts

export interface Job {
  id: number;
  title: string;
  description: string;
  city: string | null;
  country: string | null;
  nature_of_job: "full time" | "part time" | "remote";
}

const dummyData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain software applications, participate in code reviews, and collaborate with cross-functional teams.",
    city: "San Francisco",
    country: "USA",
    nature_of_job: "full time",
  },
  {
    id: 2,
    title: "Front-end Developer",
    description: "Design and implement user interfaces, collaborate with UX designers, and optimize web applications for performance.",
    city: "New York",
    country: "USA",
    nature_of_job: "full time",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    description: "Automate deployment processes, manage infrastructure, and ensure the reliability and scalability of systems.",
    city: "London",
    country: "UK",
    nature_of_job: "full time",
  },
  {
    id: 4,
    title: "Software Development Intern",
    description: "Assist in the development of software projects, learn from experienced engineers, and contribute to team initiatives.",
    city: "Berlin",
    country: "Germany",
    nature_of_job: "part time",
  },
  {
    id: 5,
    title: "Remote Backend Developer",
    description: "Design and implement server-side logic, optimize performance, and troubleshoot issues in a remote work environment.",
    city: null,
    country: null,
    nature_of_job: "remote",
  },
  {
    id: 6,
    title: "Software Quality Assurance Engineer",
    description: "Develop and execute test plans, identify and report bugs, and collaborate with development teams to ensure software quality.",
    city: "Toronto",
    country: "Canada",
    nature_of_job: "full time",
  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    description: "Build and deploy machine learning models, analyze data, and contribute to the development of AI-driven applications.",
    city: "Tokyo",
    country: "Japan",
    nature_of_job: "full time",
  },
  {
    id: 8,
    title: "Remote Full Stack Developer",
    description: "Develop both front-end and back-end components of web applications in a remote work setting.",
    city: null,
    country: null,
    nature_of_job: "remote",
  },
];

export default dummyData;
