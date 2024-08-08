import React, { useEffect, useState } from "react";
import { PropagateLoader } from 'react-spinners';
import { useForm } from "react-hook-form";
import axios from "axios";
import { REACT_APP_HOST_API } from "../../config";
import { axiosInstance } from '../../utils/axios'
import SlideInModel from "../../components/Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import { Tab, Tabs } from "@mui/material";


export default function UploadNotice({ isLoading, setIsloading, onNoticeUploaded, open, setOpen, showSnackBar, setSuccessStatus }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);

    // const [isLoading, setIsloading] = useState(false);

    const {
        setError,
        watch,
        getValues,
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const onSubmit = handleSubmit(async (data) => {
        console.log(selectedFile)
        const payload = {
            ...data,
            file: selectedFile ? selectedFile : null,
            token: sessionStorage.getItem('token'),
        }
        const formData = new FormData();

        for (const key in payload) {
            if (payload.hasOwnProperty(key)) {
                formData.append(key, payload[key]);
            }
        }



        console.log("formdata: ")
        console.log(...formData)
        console.log(payload)
        setIsloading(true)
        const uploadData = await axiosInstance.post(`/notices/create`, formData,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type for FormData
                }
            }
        );
        console.log(uploadData)

        if (uploadData?.data?.success) {
            console.log("success")
            setIsloading(false)
            onNoticeUploaded();
            setSuccessStatus(true);
            showSnackBar(true);
            setOpen(false)
        }
        else {
            setIsloading(false)
            console.log("failure")
            setSuccessStatus(true);
            showSnackBar(true);
            setOpen(false)

        }
        console.log(payload)
    })
    const linkValue = watch('link')
    useEffect(() => {
        if (linkValue && selectedFile) {
            setError('link', {
                message: "You Can only provide a link or Upload A File, Both Operations Not Permitted !"
            })
        }
    }, [linkValue, selectedFile, setError])



    const handleFileChange = (e) => {
        console.log(e.target.files)
        const file = e.target.files[0];
        console.log(file)
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
        console.log(selectedFile)
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
    };


    const handleChangeTab = (event, newValue) => {
        reset({ title: getValues('title') });
        setSelectedFile(null); // Clear selected file
        setFilePreview(null); // Clear file preview
        setTabIndex(newValue);
    };


    return (
        <SlideInModel open={open} setOpen={setOpen}>
            <div className="flex items-center justify-center h-auto" onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="mx-auto w-[800px] bg-white rounded-lg">
                    <div className='w-full flex items-center justify-between bg-gray-800 rounded-t-lg px-4'>
                        <h1 className="w-auto text-white text-xl font-medium px-1 py-2">Publish Notice</h1>
                        <RxCross2 onClick={() => setOpen(false)} className="text-md text-white cursor-pointer" />
                    </div>

                    <form className="py-4 px-9" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-lg font-medium text-[#07074D]">
                                Title *
                            </label>
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                id="title"
                                placeholder="Title of the Notice"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            {errors?.title && <small className='text-red-600 ml-2 w-fit'>Title is required</small>}
                        </div>
                        <Tabs sx={{ marginBottom: "30px", borderBottom: 1, borderColor: 'divider' }} value={tabIndex} onChange={handleChangeTab} aria-label="Upload Notice Tabs">
                            <Tab sx={{ color: "#07074D" }} label="UPload File" />
                            <Tab sx={{ color: "#07074D" }} label="Document Link" />
                        </Tabs>
                        {/* Document Link & Upload Tab Panel */}
                        <div className="w-full h-max flex items-start justify-between">
                            {tabIndex === 1 && (
                                <div className="mb-5 w-[55%]">
                                    {/* <label htmlFor="email" className="mb-3 block text-sm font-medium text-[#07074D]">
                                        Document Link
                                    </label> */}
                                    <input
                                        type="text"
                                        {...register("link")}
                                        id="link"
                                        placeholder="Link of the Notice"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            )}
                            {tabIndex === 0 && (
                                <div className="mb-6 w-[55%] flex flex-col">
                                    {/* <label className="mb-5 block text-sm font-semibold text-[#07074D]">
                                        Upload Document
                                    </label> */}
                                    {/* File Upload Input */}
                                    <div className="mb-8 mt-[-8px]">
                                        <input
                                            type="file"
                                            id="file"
                                            className="sr-only"
                                            onChange={handleFileChange}
                                        />
                                        <label
                                            htmlFor="file"
                                            className="relative flex h-[150px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                        >
                                            <div>
                                                <span className="mb-2 block text-md font-semibold text-[#7e7e94]">
                                                    Drag Document here
                                                </span>
                                                <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                                    Or
                                                </span>
                                                <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                                    Browse
                                                </span>
                                            </div>
                                        </label>
                                    </div>
                                    {/* Selected File Preview */}
                                    <div className="rounded-md bg-[#F5F7FB] py-0 px-8">
                                        {selectedFile && (
                                            <div className="flex items-center justify-between py-2">
                                                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                                    {selectedFile.name}
                                                </span>
                                                <button className="text-[#07074D]" onClick={() => setSelectedFile()}>
                                                    <svg
                                                        width="10"
                                                        height="10"
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="mt-[-20px] mb-6 w-[39%] flex flex-col">
                                <span className="text-blue-500 font-semibold mb-1">
                                    Info :
                                </span>
                                <span className="text-blue-500 text-justify text-sm">
                                    You Can only provide a Link or Upload A File, Both Operations are Not Permitted !
                                </span>
                            </div>
                        </div>
                        {errors.link && <small className='text-red-600 ml-2 w-fit'>{errors?.link?.message}</small>}
                        {/* Submit Button */}
                        <div className="w-full mt-8">
                            {isLoading ? (
                                <div className="w-full flex items-center justify-center my-10 ">
                                    <PropagateLoader />
                                </div>
                            ) : (
                                <div className="w-full flex flex-row-reverse">
                                    <button
                                        className="hover:shadow-form w-48 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        type="submit"
                                    >
                                        Publish Notice
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </SlideInModel>
    );
}
