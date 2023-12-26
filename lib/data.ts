type Job = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

let jobs: Job[] = [];

// handlers

export const getJobs = () => jobs;

export const addJob = (job: Job) => {
  jobs.push(job);
};

export const deleteJob = (id: string) => {
  jobs = jobs.filter((job) => job.id !== id);
};

export const updateJob = (id: string, title: string, desc: string) => {
  const job = jobs.find((job) => job.id === id);

  if (job) {
    job.title = title;
    job.desc = desc;
  } else {
    throw new Error("No Job found");
  }
};

export const getById = (id: string) => {
  return jobs.find((job) => job.id === id);
};
