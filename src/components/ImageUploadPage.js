import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/images/logo.png';
import '../scss/main.scss';

// Import icons from React Icons
import { FiUpload, FiCamera } from 'react-icons/fi';

// Import images
// import spanIcon from '../../public/images/span-icon1.png';
// import shape1 from '../../public/images/tes1-shape1.png';
// import shape2 from '../../public/images/tes1-shape2.png';
// import shape3 from '../../public/images/tes1-shape3.png';
// import shape4 from '../../public/images/tes1-shape4.png';
// import shape5 from '../../public/images/tes1-shape5.png';

const logo = process.env.PUBLIC_URL + '/images/logo.png';
const spanIcon = process.env.PUBLIC_URL + '/images/span-icon1.png';
const shape1 = process.env.PUBLIC_URL + '/images/tes1-shape1.png';
const shape2 = process.env.PUBLIC_URL + '/images/tes1-shape2.png';
const shape3 = process.env.PUBLIC_URL + '/images/tes1-shape3.png';
const shape4 = process.env.PUBLIC_URL + '/images/tes1-shape4.png';
const shape5 = process.env.PUBLIC_URL + '/images/tes1-shape5.png';


const ImageUploadPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isFromCamera, setIsFromCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsFromCamera(false);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const permissionStatus = await navigator.permissions.query({ name: 'camera' });
      if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
        startCamera();
      } else {
        alert("Camera permission is required to proceed.");
      }
    } catch (error) {
      console.error("Permission query not supported or camera access blocked", error);
      startCamera();
    }
  };

  const startCamera = async () => {
    setIsCameraOn(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
        alert("Unable to access the camera. Please check your device settings.");
        setIsCameraOn(false);
      }
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      setSelectedImage(canvasRef.current.toDataURL("image/png"));
      setIsFromCamera(true);

      // Stop the camera stream after capturing the photo
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraOn(false);
    }
  };

  const handleCloseCamera = () => {
    // Stop the camera stream and hide the preview
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsCameraOn(false);
  };

  const handleRetake = () => {
    setSelectedImage(null);
    handleOpenCamera();
  };

  const handleReupload = () => {
    setSelectedImage(null);
  };

  const handleAnalyzeImage = () => {
    alert("Analyzing image...");
  };

  return (
    <div className="image-upload-page">
      <div style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#d9ecf0' }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '800px', height: 'auto' }} />
        </Link>
      </div>

      <div className="tes1 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <div className="heading1">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <img src={spanIcon} alt="Span Icon" /> Fish Freshness Analyzer
                </span>
                <h2 className="text-anime-style-3">Select an Option</h2>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="700">
                  Analyze the freshness of fish by scanning the eye from an image. Choose an option to proceed.
                </p>
              </div>
            </div>
          </div>

          <div className="space60"></div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 text-center">
              <div style={optionBoxStyle}>
                <div style={iconContainerStyle}>
                  <FiUpload style={iconStyle} />
                </div>
                <div className="heading1">
                  <h4>Upload Photo</h4>
                  <p style={descriptionStyle}>Upload a photo from your device for freshness analysis.</p>
                  <label style={buttonStyle}>
                    Choose File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadPhoto}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div style={optionBoxStyle}>
                <div style={iconContainerStyle}>
                  <FiCamera style={iconStyle} />
                </div>
                <div className="heading1">
                  <h4>Open Camera</h4>
                  <p style={descriptionStyle}>Take a photo directly with your camera for analysis.</p>
                  <button
                    onClick={handleOpenCamera}
                    style={buttonStyle}
                  >
                    Access Camera
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Camera Preview with Grid, Capture, and Close Button */}
          {isCameraOn && (
            <div style={cameraPreviewContainerStyle}>
              <video ref={videoRef} style={videoStyle} autoPlay />
              <div style={gridOverlayStyle}></div>
              <button onClick={handleCapturePhoto} style={captureButtonStyle}>Capture Photo</button>
              <button onClick={handleCloseCamera} style={closeButtonStyle}>Close</button>
              <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>
          )}

          {/* Display uploaded or captured image with options */}
          {selectedImage && (
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 text-center mt-4">
                <h4>Preview</h4>
                <img src={selectedImage} alt="Selected" style={previewImageStyle} />
                <div style={{ marginTop: '10px' }}>
                  {isFromCamera ? (
                    <button onClick={handleRetake} style={buttonStyle}>Retake</button>
                  ) : (
                    <button onClick={handleReupload} style={buttonStyle}>Reupload</button>
                  )}
                  <button onClick={handleAnalyzeImage} style={{ ...buttonStyle, marginLeft: '10px' }}>Analyze Image</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <img src={shape1} alt="Shape 1" className="shape1" />
        <img src={shape2} alt="Shape 2" className="shape2" />
        <img src={shape3} alt="Shape 3" className="shape3 animate3" />
        <img src={shape4} alt="Shape 4" className="shape4" />
        <img src={shape5} alt="Shape 5" className="shape5" />
      </div>
    </div>
  );
};

export default ImageUploadPage;

// Inline styles
const optionBoxStyle = {
  backgroundColor: '#f1f9fb',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',
  cursor: 'pointer',
  margin: '20px 0'
};

const iconContainerStyle = {
  backgroundColor: '#e0f7fa',
  width: '70px',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  margin: '0 auto',
  marginBottom: '15px'
};

const iconStyle = {
  fontSize: '36px',
  color: '#007bff'
};

const descriptionStyle = {
  color: '#555',
  marginBottom: '15px'
};

const buttonStyle = {
  textDecoration: 'none',
  color: '#007bff',
  backgroundColor: '#fff',
  border: '1px solid #007bff',
  borderRadius: '5px',
  padding: '8px 15px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
};

const cameraPreviewContainerStyle = {
  position: 'relative',
  border: '2px solid #007bff',
  borderRadius: '10px',
  overflow: 'hidden',
  margin: '20px auto',
  textAlign: 'center',
  maxWidth: '500px',
};

const videoStyle = {
  width: '100%',
  maxHeight: '400px',
  borderRadius: '10px',
  objectFit: 'cover',
};

const gridOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  pointerEvents: 'none',
  border: '1px solid #007bff',
  opacity: 0.5,
};

const captureButtonStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#ff4d4d',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '8px 15px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const previewImageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: '10px',
  border: '2px solid #007bff'
};
