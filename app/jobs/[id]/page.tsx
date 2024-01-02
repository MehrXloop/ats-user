'use client'
import React, { useState, useEffect } from 'react';
import dummyData, { Job } from '@/lib/jobs';
import moment from 'moment';
import SignUpOptions from '@/components/SignUpOptions';
import { useSession } from 'next-auth/react';
import ApplyJobModal from '@/components/ApplyJobModal';
import JobShareOptions from '@/components/JobShareOptions';

const Page = ({ params }: { params: { id: string } }) => {
    const { data: session } = useSession()
    const [applyModal, setApplyModal] = useState(false)
    const [job, setJob] = useState<Job | null>(null);
    const [fastApplyModal, setFastApplyModal] = useState(false)
    const [showSignModal, setShowSignModal] = useState(false);
    const [shareJobOptions, setShareJobOptions] = useState(false);

    // Convert params.id to a number for comparison
    const jobId = parseInt(params.id, 10);
    useEffect(() => {
        // Convert params.id to a number for comparison
        const jobId = parseInt(params.id, 10);

        const job = dummyData.find((job) => job.id === jobId);
        if (job) {
            setJob(job);
        }
    }, [params.id]);


    const formatPostedTime = (postedAt: Date): string => {
        const currentDateTime = moment();
        const postedDateTime = moment(postedAt);
        const diffInDays = currentDateTime.diff(postedDateTime, 'days');

        if (diffInDays === 0) {
            return 'Today';
        } else if (diffInDays === 1) {
            return '1 day ago';
        } else if (diffInDays < 7) {
            return `${diffInDays} days ago`;
        } else {
            const diffInWeeks = Math.floor(diffInDays / 7);
            return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
        }
    };


    return (
        <>
            <div className='w-full flex items-center'>
                {job ? (
                    <div className="job_card glassmorphism">
                        <div>
                            <h1 className='font-bold text-3xl cursor-pointer'>{job.title}</h1>
                            <p className='text-xl'>{job.city}, {job.country}, {job.nature_of_job}</p>
                            <div className='flex items-center justify-between mb-4'>
                                <p className='text-xl'>Posted {formatPostedTime(job.postedAt)}</p>
                                <div className='flex gap-2'>
                                    <div className='flex gap-2 relative'>
                                        <button type='button' className='border_btn' onClick={() => setShareJobOptions(!shareJobOptions)}>
                                            Share Job
                                        </button>
                                        {shareJobOptions && (
                                            <JobShareOptions jobId={jobId} jobTitle={job.title} setShareJobOptions={setShareJobOptions} />
                                        )}
                                    </div>
                                    <button type='button' className='border_btn ' onClick={() => setApplyModal(true)}>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                            <hr className='mb-4' />
                            <h1 className='font-bold text-2xl'>Description</h1>
                            <p className='text-xl'>{job.description}</p>
                        </div>
                    </div>

                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {applyModal && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg'>
                        <div className='flex justify-end mb-4'>
                            <button
                                type='button'
                                onClick={() => setApplyModal(false)}
                                className='text-gray-500 hover:text-gray-700'
                            >
                                X
                            </button>
                        </div>
                        <div className='flex justify-between gap-1'>
                            <button type='button' className='border_btn' onClick={() => {
                                setFastApplyModal(true);
                                setApplyModal(false);
                            }}>
                                Fast Apply
                            </button>
                            {!session &&
                                <button type='button' className='border_btn' onClick={() => { setShowSignModal(true); setApplyModal(false); }}>
                                    Apply With Login
                                </button>}
                        </div>
                    </div>
                </div>
            )}


            {showSignModal && <SignUpOptions setShowSignModal={setShowSignModal} />}
            {fastApplyModal && <ApplyJobModal setFastApplyModal={setFastApplyModal} />}
        </>
    )
};

export default Page;
