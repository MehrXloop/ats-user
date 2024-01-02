import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon

} from 'next-share';



interface Props {
    setShareJobOptions: React.Dispatch<React.SetStateAction<boolean>>
    jobId: number
    jobTitle: string
}

const JobShareOptions: React.FC<Props> = ({ setShareJobOptions, jobId, jobTitle }) => {

    const copyJobLink = () => {
        // Copy job link to clipboard
        const jobLink = `${window.location.origin}/jobs/${jobId}`;
        navigator.clipboard.writeText(jobLink);
        setShareJobOptions(false);
    };
    
    return (
        <div className='absolute bottom-[-4.7rem] right-0 z-10 bg-white p-2 rounded shadow-md glassmorphism flex gap-4'>
            <FacebookShareButton
                url='https://github.com/MehrXloop/ats-user'
                quote={`${jobTitle} at XLoop Digital - Join Our Team!`}
                hashtag={'#XLoopJobs'}
                onClick={() => setShareJobOptions(false)}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={`${window.location.origin}/jobs/${jobId}`}
                title={`${jobTitle} at XLoop Digital - Join Our Team!`}
                onClick={() => setShareJobOptions(false)}

            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
                url='https://github.com/MehrXloop/ats-user'
                onClick={() => setShareJobOptions(false)}
            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <button onClick={copyJobLink} title='copy link' className="bg-white rounded-full py-1 px-2">&#x1F517;</button>
        </div>
    )
}

export default JobShareOptions