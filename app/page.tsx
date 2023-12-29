import dummyData from "@/lib/jobs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <h1>home</h1> */}
    <div className="flex flex-col" >
      <div>
        <div>filters</div>
      <div>
      <Image src="/images/thumbnail.png" alt="cover image" width="500" height="300">
        </Image>
        {/* <Image src="https://e7.pngegg.com/pngimages/320/804/png-clipart-regulatory-compliance-business-marketing-recruitment-applicant-tracking-system-business-people-logo-thumbnail.png" alt="external image" width="500" height="300">
        </Image> */}
      </div>
      </div>
      <div>
        <h1>Software Engineering Jobs</h1>
        <div className='bg-white p-6 rounded-lg w-auto'>
        <ul>
          {dummyData.map((job) => (
            <li key={job.id} className=' bg-white shadow rounded border border-slate-300 border-spacing-2'>
              <strong>{job.title}</strong>
              <p>{job.description}</p>
              <p>
                Location: {job.city || "Remote"}, {job.country || "N/A"}
              </p>
              <p>Nature of Job: {job.nature_of_job}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  </>
     )
}