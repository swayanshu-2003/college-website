import React, { useEffect, useRef, useState } from 'react';

const DepartmentGallery = ({ photos }) => {
    const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
    const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
    const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
    const galleryRef = useRef(null);



    useEffect(() => {
        const imageGalleryPhotos = galleryRef.current.querySelectorAll('img');
        imageGalleryPhotos.forEach((img, index) => {
            img.setAttribute('data-index', index + 1);
        });
    }, []);

    const imageGalleryOpen = (event) => {
        setImageGalleryImageIndex(parseInt(event.target.dataset.index));
        setImageGalleryActiveUrl(event.target.src);
        setImageGalleryOpened(true);
    };

    const imageGalleryClose = () => {
        setImageGalleryOpened(false);
        setTimeout(() => setImageGalleryActiveUrl(null), 300);
    };

    const imageGalleryNext = () => {
        const nextIndex = imageGalleryImageIndex === galleryRef.current.childElementCount
            ? 1
            : imageGalleryImageIndex + 1;
        const nextImage = galleryRef.current.querySelector(`[data-index='${nextIndex}']`);
        setImageGalleryImageIndex(nextIndex);
        setImageGalleryActiveUrl(nextImage.src);
    };

    const imageGalleryPrev = () => {
        const prevIndex = imageGalleryImageIndex === 1
            ? galleryRef.current.childElementCount
            : imageGalleryImageIndex - 1;
        const prevImage = galleryRef.current.querySelector(`[data-index='${prevIndex}']`);
        setImageGalleryImageIndex(prevIndex);
        setImageGalleryActiveUrl(prevImage.src);
    };

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'ArrowRight') {
                imageGalleryNext();
            } else if (event.key === 'ArrowLeft') {
                imageGalleryPrev();
            } else if (event.key === 'Escape') {
                imageGalleryClose();
            }
        };
        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [imageGalleryImageIndex]);



    return (


        <div className="w-full h-full select-none">
            <div className="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                <ul ref={galleryRef} id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
                    {photos?.map((src, index) => (
                        // console.log(src)
                        <li key={index} className=" group relative pb-[75%] overflow-hidden rounded bg-gray-200 cursor-zoom-in">
                            <img onClick={imageGalleryOpen} src={src?.src} data-index={index + 1} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out" alt={`photo gallery image ${index + 1}`} />
                        </li>
                    ))}
                </ul>
            </div>
            {imageGalleryOpened && (
                <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out " onClick={imageGalleryClose} style={{ display: 'flex' }}>
                    <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                        <div onClick={(e) => { e.stopPropagation(); imageGalleryPrev(); }} className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <img src={imageGalleryActiveUrl} className="object-contain object-center w-full h-full select-none cursor-zoom-out" alt="" style={{ display: 'block' }} />
                        <div onClick={(e) => { e.stopPropagation(); imageGalleryNext(); }} className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default DepartmentGallery;
