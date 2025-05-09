/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from 'react';


function ImageForm({ onSubmit }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputContent, setInputContent] = useState('No file chosen');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const maxImageCount = 3;

  useEffect(() => {
    return () => {
      selectedImages.forEach(image => URL.revokeObjectURL(image.preview));
    };
  }, [selectedImages]);

  const handleFiles = (files) => {
    const validFiles = Array.from(files).slice(0, maxImageCount);
    const imagesWithPreview = validFiles.map(file => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));

    setSelectedImages(imagesWithPreview);
    setInputContent(
      files.length > maxImageCount
        ? `First ${maxImageCount} files selected out of ${files.length}`
        : `${files.length} file(s) selected`
    );
    onSubmit({ imageData: validFiles });
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = selectedImages.filter((_, index) => index !== indexToRemove);
    setSelectedImages(updatedImages);
    setInputContent(
      updatedImages.length === 0
        ? 'No file chosen'
        : `${updatedImages.length} file(s) selected`
    );
    onSubmit({ imageData: updatedImages });
  };

  

  const renderSelectedImages = () => {
    return selectedImages.map((image, index) => (
      <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src={image.preview}
          alt={`Selected Image ${index + 1}`}
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            margin: 5,
            borderRadius: 8,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        />
        <button
          onClick={() => handleRemoveImage(index)}
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: 20,
            height: 20,
            cursor: 'pointer',
            fontSize: 12,
          }}
        >
          ×
        </button>
      </div>
    ));
  };

  return (
    <div className="header-container my-3">
      <center>
        <h4 className="add-photo"><u>Add Photo</u></h4>
      </center>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        style={{
          border: '2px dashed #ccc',
          borderRadius: 10,
          padding: 20,
          textAlign: 'center',
          backgroundColor: isDragging ? '#f0f8ff' : '#fafafa',
          cursor: 'pointer',
        }}
      >
        <input
          type="file"
          id="myfile"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <p>{inputContent}</p>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          Drag & drop images here or click to select (max {maxImageCount})
        </p>
      </div>

      <div style={{ marginTop: 10 }}>{renderSelectedImages()}</div>
    </div>
  );
}

export default ImageForm;
