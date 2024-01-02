"use client";
import dummyData, { Job } from "@/lib/jobs";
import Image from "next/image";
import { useState } from "react";
import "@/app/globals.css";
import { FilteredJobs } from "@/components/FilteredJobs";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  const [cityFilter, setCityFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [titleFilter,setTitleFilter] = useState("");
  const [natureFilter, setNatureFilter] = useState<
    "part time" | "full time" | ""
  >("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(dummyData);

  const applyFilters = () => {
    const newFilteredJobs = dummyData.filter((job) => {
      const cityMatch = job.city
        .toLowerCase()
        .includes(cityFilter.toLowerCase());
      const countryMatch = job.country
        .toLowerCase()
        .includes(countryFilter.toLowerCase());
      const titleMatch = job.title.toLowerCase().includes(titleFilter.toLowerCase())
      const natureMatch =
        natureFilter === "" || job.nature_of_job === natureFilter;

      return titleMatch && cityMatch && countryMatch && natureMatch;
    });

    setFilteredJobs(newFilteredJobs);
  };

  // Pass filter data to the job page using query parameters
  // router.push({
  //   pathname: "/jobs",
  //   query: {
  //     title: titleFilter,
  //     city: cityFilter,
  //     country: countryFilter,
  //     nature: natureFilter,
  //   },
  // });

  return (
    <>
      {/* <h1>home</h1> */}
      <div className="flex flex-col">
        <div className="flex justify-center items-start mx-2 gap-5 ">
          <div className="flex flex-col gap-y-10 px-8 border-2 w-1/2 ">
            <h1>First Features</h1>
            <p>Search thousands of job openings from ...........</p>
            <input
              className="border-2 rounded-lg p-5 "
              type="text"
              placeholder="Job Title"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
            <input
              className="border-2 rounded-lg p-5 "
              type="text"
              placeholder="City"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            />
            <input
              className="border-2 rounded-lg p-5"
              type="text"
              placeholder="Country"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            />
            <select
              className=" border-2 rounded-lg p-5"
              value={natureFilter}
              onChange={(e) =>
                setNatureFilter(
                  e.target.value as "part time" | "full time" | ""
                )
              }
            >
              <option value="">Select Nature of Job</option>
              <option value="part time">Part-Time</option>
              <option value="full time">Full-Time</option>
            </select>
            {/* <button className="outline_btn"> */}
            <Link onClick={applyFilters} href={{
              pathname:"/jobs",
              query : {
                title: titleFilter,
                city:cityFilter,
                country:countryFilter,
                nature: natureFilter
              },
            }}> Search</Link>
             
            {/* </button> */}
  
            {/* <Link href={{
              pathname:"/about",
              query : {
                title: titleFilter,
                city:cityFilter,
                country:countryFilter,
                nature: natureFilter
              },
            }}>Go to job Page;server pe send krna ho tou , by default all server components
            </Link> */}
          </div>
          <div className="flex w-2/5 ">
            <Image className="flex items-center h-100"
              src="/images/applicant-tracking-system.png"
              alt="cover image"
              width="600"
              height="400"
              // fill = {true}
            ></Image>
            {/* <Image src="https://e7.pngegg.com/pngimages/320/804/png-clipart-regulatory-compliance-business-marketing-recruitment-applicant-tracking-system-business-people-logo-thumbnail.png" alt="external image" width="500" height="300">
        </Image> */}
          </div>
        </div>
        <div className="flex justify-center items-start">
          {/* <h2>Filtered Jobs</h2> */}
          {/* Job List */}

          {filteredJobs && 
          (
            // <ul>
            //   {filteredJobs.map((job: Job, index: number) => (
            //     <li key={index}>
            //       <h2>{job.title}</h2>
            //       <p>{job.description}</p>
            //       {/* <p>Posted on: {job.postedAt}</p> */}
            //       <p>
            //         Location: {job.city}, {job.country}
            //       </p>
            //       <p>Nature of Job: {job.nature_of_job}</p>
            //     </li>
            //   ))}
            // </ul>
            // ---------------------
          //   <div>
          //   {filteredJobs.map((job: Job) => (
          //     <div className='job_card glassmorphism' key={job.id}>
          //       <div className='flex justify-between items-start gap-1 flex-col'>
          //         <h1 className='font-bold text-2xl cursor-pointer'>{job.title}</h1>
          //         <p className='text-xl'>{job.city}, {job.country}, {job.nature_of_job}</p>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <FilteredJobs filteredJobs={filteredJobs}/>
          )
          }
        </div>
      </div>
    </>
  );
}
