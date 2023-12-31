'use client'
import SendEmail from '@/utils/SendEmail';
import React, { useState } from 'react';
import { useForm, } from 'react-hook-form';


export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    fileInput: File;
};
interface Props {
    setFastApplyModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ApplyJobModal: React.FC<Props> = ({ setFastApplyModal }) => {
    const [file, setFile] = useState<File | null>(null);
    const { register, handleSubmit, reset } = useForm<FormData>();


    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        setFile(selectedFile);
    };



    function onSubmit(data: FormData) {
        SendEmail(data);
        if (file) {
            console.log('Selected File:', file);
            setFile(null);
        }
        reset();
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg w-auto'>
                <div className='flex justify-end'>
                    <button
                        type='button'
                        onClick={() => setFastApplyModal(false)}
                        className='text-gray-500 hover:text-gray-700'
                    >
                        X
                    </button>
                </div>
                <div className='flex justify-between items-center gap-3'>
                    <div>
                        <h1 className='font-bold text-2xl'>Autofil Profile</h1>
                        <p className='font-bold text-l'>Safe time by uploading your resume in following formats: <br /> pdf , doc , jpeg</p>
                    </div>
                    <input className='shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id="resume"
                        type="file"
                        // className="hidden"
                        onChange={handleFileInputChange}
                        placeholder='import resume from'
                        accept=".pdf,.doc,.docx,.rtf,.txt"
                    />
                </div>

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                {...register('firstName', { required: true })}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                {...register('lastName', { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                            {...register('phone', { required: false })}
                        />
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                        Resume
                    </label>
                    <div
                        className="border-dashed border-2 border-gray-400 rounded p-6 mt-4 text-center cursor-pointer"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <label htmlFor="resume" className="text-gray-700 text-sm font-bold">
                            Drag and drop your resume here or click to select
                        </label>
                        <input
                            id="resume"
                            type="file"
                            className="hidden"
                            onChange={handleFileInputChange}
                            accept=".pdf,.doc,.docx,.rtf,.txt"
                        />
                        {file && <p className="mt-2 text-gray-700">{file.name}</p>}
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </form >
            </div >
        </div >
    );
};

export default ApplyJobModal;
