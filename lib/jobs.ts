// dummyData.ts

export interface Job {
  id: number;
  title: string;
  description: string;
  city: string ;
  country: string ;
  nature_of_job: "full time" | "part time";
  postedAt: Date;
}

const dummyData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    city: "San Francisco",
    country: "USA",
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    title: "Front-end Developer",
    description: "Design and implement user interfaces, collaborate with UX designers, and optimize web applications for performance.",
    city: "New York",
    country: "USA",
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // Posted 3 days ago

  },
  {
    id: 3,
    title: "DevOps Engineer",
    description: "Automate deployment processes, manage infrastructure, and ensure the reliability and scalability of systems.",
    city: "London",
    country: "UK",
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  },
  {
    id: 4,
    title: "Software Development Intern",
    description: "Assist in the development of software projects, learn from experienced engineers, and contribute to team initiatives.",
    city: "Karachi",
    country: "Pakistan",
    nature_of_job: "part time",
    postedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: 5,
    title: "Backend Developer (Node.js)",
    description: "Design and implement server-side logic, optimize performance, and troubleshoot issues in a remote work environment.",
    city: 'Islamabad',
    country: 'Pakistan',
    nature_of_job: "part time",
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), 

  },
  {
    id: 6,
    title: "Software Quality Assurance Engineer",
    description: "Develop and execute test plans, identify and report bugs, and collaborate with development teams to ensure software quality.",
    city: "Toronto",
    country: "Canada",
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),

  },
  {
    id: 7,
    title: "Machine Learning Engineer",
    description: "Build and deploy machine learning models, analyze data, and contribute to the development of AI-driven applications.",
    city: "Tokyo",
    country: "Japan",
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: 8,
    title: "Full Stack Developer (MERN)",
    description: "Develop both front-end and back-end components of web applications in a remote work setting.",
    city: 'Lahore',
    country: 'Pakistan',
    nature_of_job: "full time",
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)

  },
];

export default dummyData;
