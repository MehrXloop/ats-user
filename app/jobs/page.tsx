"use client";
import React, { useState } from "react";
import dummyData, { Job } from "@/lib/jobs";
import moment from "moment";
import SignUpOptions from "@/components/SignUpOptions";
import { useSession } from "next-auth/react";
import ApplyJobModal from "@/components/ApplyJobModal";
import { useSearchParams } from "next/navigation";
import { title } from "process";
// import { useRouter } from "next/router";

const Jobs = () => {
  // const router = useRouter();
  // const { title, city, country, nature } = router.query;
  const searchParams = useSearchParams();
  console.log("name property title: ",searchParams.get('title'))
  console.log("name property city: ",searchParams.get('city'))
  console.log("name property country: ",searchParams.get('country'))
  console.log("name property nature: ",searchParams.get('nature'))


  const { data: session } = useSession();
  const [selectedJob, setSelectedJob] = useState<Job>(dummyData[0]);
  const [applyModal, setApplyModal] = useState(false);
  const [fastApplyModal, setFastApplyModal] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const formatPostedTime = (postedAt: Date): string => {
    const currentDateTime = moment();
    const postedDateTime = moment(postedAt);
    const diffInDays = currentDateTime.diff(postedDateTime, "days");

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "1 day ago";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      const diffInWeeks = Math.floor(diffInDays / 7);
      return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
    }
  };

  const [cityFilter, setCityFilter] = useState(searchParams.get('city'));
  const [countryFilter, setCountryFilter] = useState(searchParams.get('country'));
  const [titleFilter,setTitleFilter] = useState(searchParams.get('title'));
  const [natureFilter, setNatureFilter] = useState<
    "part time" | "full time" | ""
  >("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(dummyData);

  // const applyFilters = () => {
  //   const newFilteredJobs = dummyData.filter((job) => {
  //     const cityMatch = job.city
  //       .toLowerCase()
  //       .includes(cityFilter.toLowerCase());
  //     const countryMatch = job.country
  //       .toLowerCase()
  //       .includes(countryFilter.toLowerCase());
  //     const titleMatch = job.title.toLowerCase().includes(titleFilter.toLowerCase())
  //     const natureMatch =
  //       natureFilter === "" || job.nature_of_job === natureFilter;

  //     return titleMatch && cityMatch && countryMatch && natureMatch;
  //   });

  //   setFilteredJobs(newFilteredJobs);
  // };

  // console.log("received data from home: ", title,city,country,nature)
  return (
    <>
      <div className="flex flex-row gap-x-10 px-8 border-2  w-half ">
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
            setNatureFilter(e.target.value as "part time" | "full time" | "")
          }
        >
          <option value="">Select Nature of Job</option>
          <option value="part time">Part-Time</option>
          <option value="full time">Full-Time</option>
        </select>
        <button className="outline_btn" 
        // onClick={applyFilters}
        >
          Search
        </button>
      </div>

      <div className="flex justify-between items-start mx-2">
        <div>
          {dummyData.map((job: Job) => (
            <div className="job_card glassmorphism" key={job.id}>
              <div className="flex justify-between items-start gap-1 flex-col">
                <h1
                  className="font-bold text-2xl cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  {job.title}
                </h1>
                <p className="text-xl">
                  {job.city}, {job.country}, {job.nature_of_job}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="job_card glassmorphism">
          {selectedJob && (
            <div>
              <h1 className="font-bold text-3xl cursor-pointer">
                {selectedJob.title}
              </h1>
              <p className="text-xl">
                {selectedJob.city}, {selectedJob.country},{" "}
                {selectedJob.nature_of_job}
              </p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl">
                  Posted {formatPostedTime(selectedJob.postedAt)}
                </p>
                <div className="flex gap-2">
                  <button type="button" className="border_btn">
                    Share Job
                  </button>
                  <button
                    type="button"
                    className="border_btn"
                    onClick={() => setApplyModal(true)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <hr className="mb-4" />
              <h1 className="font-bold text-2xl">Description</h1>
              <p className="text-xl">{selectedJob.description}</p>
            </div>
          )}
        </div>
      </div>

      {applyModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={() => setApplyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
            <div className="flex justify-between gap-1">
              <button
                type="button"
                className="border_btn"
                onClick={() => {
                  setFastApplyModal(true);
                  setApplyModal(false);
                }}
              >
                Fast Apply
              </button>
              {!session && (
                <button
                  type="button"
                  className="border_btn"
                  onClick={() => {
                    setShowSignModal(true);
                    setApplyModal(false);
                  }}
                >
                  Apply With Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showSignModal && <SignUpOptions setShowSignModal={setShowSignModal} />}
      {fastApplyModal && (
        <ApplyJobModal setFastApplyModal={setFastApplyModal} />
      )}
    </>
  );
};

export default Jobs;
