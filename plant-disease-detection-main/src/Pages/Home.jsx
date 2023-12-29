import React, { useEffect, useRef, useState } from 'react'
import Camera from '../Components/Camera'

import image from '/images/leaf-disease.webp'
export default function Home() {
    const selectedFile = useRef();
    const [displayImage, setDisplayImage] = useState(true);
    const [result, setResult] = useState(false);
    const [camera, setCamera] = useState(false);
    const [fromGallery, setFromGallery] = useState(false);
    const [selectedImage, setSelectedImage] = useState()
    const [data, setData] = useState({
        class: "Target_Spot",
        confidence: 0.6513171792030334
    });
    const changeUI = function (dispFunc, hideFunc) {
        hideFunc(false);
        dispFunc(true);
        setDisplayImage(false);
    }
    const sendFile = async () => {
        console.log(selectedImage)
        if (selectedImage) {
            try {
                const formData = new FormData();
                formData.append('image', selectedImage); // Assuming 'selectedImage' is the image file
    
                const response = await fetch('http://localhost:8000/predict', {
                    method: 'POST',
                    body: formData,
                });
    
                if (response.ok) {
                    const resultData = await response.json();
                    setResult(resultData); // Set the received result from the backend
                    console.log(result,resultData);
                } else {
                    // Handle error if the response is not okay
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                // Handle fetch error
                console.error('Fetch Error:', error);
            }
        } else {
            // Handle case when no image is selected
            console.warn('No image selected.');
        }
    };
    // const selectImage = function (e) {
    //     const file = e.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();

    //         reader.onloadend = () => {
    //             setSelectedImage(reader.result);
    //         };

    //         reader.readAsDataURL(file);
    //     }
    // }
    const captureImage = function () {
        console.log('capture Image');
    }

    const selectImage = function (e) {
        const file = e.target.files[0];
    
        if (file) {
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                console.log(reader.image)
                sendFile(reader.result); // Send file after setting selected image
            };
    
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='flex flex-column sm:flex-row'>
            <div className='px-20 sm:px-20 sm:w-1/2'>
                <div className='w-full aspect-[1/1]'>
                    {displayImage && <img src={image} alt="Disease plant leaf" className='w-100' style={{ height: `100%`, objectFit: 'cover' }} />}
                    {fromGallery && <input type='file' accept="image/*" onChange={selectImage} />}
                    {camera && <Camera />}
                    {selectedImage && <img src={selectedImage} className='w-full'/>}
                </div >
                <div className='my-4'>
                    <button className='ml-1 mr-4 my-2' onClick={() => changeUI(setFromGallery, setCamera)}>Select Image</button>
                    <button onClick={() => changeUI(setCamera, setFromGallery)}>Capture Image</button>
                </div>
            </div>
            <div className="solution px-20 sm:p-20 sm:w-1/2">
                <div className='h-full'>
                    <div className="text-2xl text-bold">Detected Disease -</div>
                    <p className='my-2'>
                        the solution
                    </p>
                </div>
            </div>
        </div>
    )
}