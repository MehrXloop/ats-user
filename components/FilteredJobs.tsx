// import { Job } from "@/lib/jobs"

// export interface filteredJobs {
//     id: number;
//     title: string;
//     description: string;
//     city: string ;
//     country: string ;
//     nature_of_job: "full time" | "part time";
//     postedAt: Date;
//   }


// export const FilteredJobs = ({filteredJobs: filteredJobs[]}) => {
//     return(
//         <div>
//         {filteredJobs.map((job: Job) => (
//           <div className='job_card glassmorphism' key={job.id}>
//             <div className='flex justify-between items-start gap-1 flex-col'>
//               <h1 className='font-bold text-2xl cursor-pointer'>{job.title}</h1>
//               <p className='text-xl'>{job.city}, {job.country}, {job.nature_of_job}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
// }

import { Job } from "@/lib/jobs";

export interface filteredJobs {
  id: number;
  title: string;
  description: string;
  city: string;
  country: string;
  nature_of_job: "full time" | "part time";
  postedAt: Date;
}

export const FilteredJobs = ({ filteredJobs }: { filteredJobs: filteredJobs[] }) => {
  return (
    <div>
      {filteredJobs.map((job: Job) => (
        <div className='job_card glassmorphism' key={job.id}>
          <div className='flex justify-between items-start gap-1 flex-col'>
            <h1 className='font-bold text-2xl cursor-pointer'>{job.title}</h1>
            <p className='text-xl'>{job.city}, {job.country}, {job.nature_of_job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
