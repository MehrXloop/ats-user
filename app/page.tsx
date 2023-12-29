"use client";
import dummyData, { Job } from "@/lib/jobs";
import Image from "next/image";
import { useState } from "react";
import "@/app/globals.css"

export default function Home() {
  const [cityFilter, setCityFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
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
      const natureMatch =
        natureFilter === "" || job.nature_of_job === natureFilter;

      return cityMatch && countryMatch && natureMatch;
    });

    setFilteredJobs(newFilteredJobs);
  };

  return (
    <>
      {/* <h1>home</h1> */}
      <div className="flex flex-col">
        <div className="flex justify-between rounded-lg ml-10 mr-10">
          <div className="flex flex-col gap-y-10 justify-center px-8 border-2 ">
            <h1>First Features</h1>
            <p>Search thousands of job openings from ...........</p>
            <input className="border-2 rounded-lg p-5 "
              type="text"
              placeholder="City"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            />
            <input className="border-2 rounded-lg p-5"
              type="text"
              placeholder="Country"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            />
            <select className=" border-2 rounded-lg p-5"
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
            <button className="outline_btn" onClick={applyFilters}>Search</button>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/thumbnail.png"
              alt="cover image"
              width="500"
              height="500"
            ></Image>
            {/* <Image src="https://e7.pngegg.com/pngimages/320/804/png-clipart-regulatory-compliance-business-marketing-recruitment-applicant-tracking-system-business-people-logo-thumbnail.png" alt="external image" width="500" height="300">
        </Image> */}
          </div>
        </div>
        <div>
          {/* <h2>Filtered Jobs</h2> */}
          {/* Job List */}

          {filteredJobs && (
            <ul>
              {filteredJobs.map((job: Job, index: number) => (
                <li key={index}>
                  <h2>{job.title}</h2>
                  <p>{job.description}</p>
                  {/* <p>Posted on: {job.postedAt}</p> */}
                  <p>
                    Location: {job.city}, {job.country}
                  </p>
                  <p>Nature of Job: {job.nature_of_job}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
