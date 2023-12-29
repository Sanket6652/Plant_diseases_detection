import React, { useRef, useState } from 'react'
export default function Camera() {
    const videoRef = useRef(null);
    const [photos, setPhotos] = useState([]);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [facingMode, setFacingMode] = useState('user');

    const startCamera = async (facingMode = 'user') => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            setIsCameraOn(true);
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    };
    // Function to switch between front and rear camera
    const switchCamera = () => {
        stopCamera(); // Stop the current camera stream

        // Determine the current facing mode and switch it
        const newFacingMode = facingMode === 'user' ? 'environment' : 'user';

        // Start the camera with the new facing mode
        startCamera(newFacingMode);
        setFacingMode(newFacingMode)
    };
    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks();
        if (tracks) {
            tracks.forEach((track) => track.stop());
        }
        videoRef.current.srcObject = null;
        setIsCameraOn(false);
    };
    const capturePhoto = () => {
        if (isCameraOn) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const photoDataUrl = canvas.toDataURL('image/jpeg');

            // Update state to store the captured photo
            setPhotos((prevPhotos) => [...prevPhotos, photoDataUrl]);
        } else {
            console.warn('Camera is not turned on.');
        }
    };
    return (
        <div className='max-w-[800px] mx-auto'>
            <div>
                <video ref={videoRef} className={`mx-auto px-4 w-full h-full`} style={{ display: `${isCameraOn ? 'block' : 'none'}` }} autoPlay playsInline width={isCameraOn ? 480 : 0} height={isCameraOn ? 480 : 0}></video>

                <div className='mt-4 text-center'>
                    <button onClick={startCamera} disabled={isCameraOn}>
                        <ion-icon name="videocam-outline"></ion-icon>
                    </button>
                    <button onClick={capturePhoto} className='ml-2'>
                        <ion-icon name="aperture-outline"></ion-icon>
                    </button>
                    <button onClick={stopCamera} disabled={!isCameraOn} className='mx-2'>
                        <ion-icon name="videocam-off-outline"></ion-icon>
                    </button>
                    <button onClick={switchCamera}>
                        <ion-icon name="sync-outline"></ion-icon>
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>Photo Gallery</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Captured Photo ${index + 1}`} style={{ maxWidth: '100px', marginRight: '10px', marginBottom: '10px' }} />
                    ))}
                </div>
            </div>
        </div >
    );
}