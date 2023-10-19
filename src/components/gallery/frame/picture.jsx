import React, { useState } from 'react';

const PictureFrame = ({ filePaths }) => {
  const [enlargedImagePath, setEnlargedImagePath] = useState(null);

  const handleImageClick = (path) => {
    setEnlargedImagePath(path);
  };

  const closeEnlarged = () => {
    setEnlargedImagePath(null);
  };

  return (
    <>
      <div className="image-list flex grow justify-center flex-wrap flex-row">
        {filePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Image ${index}`}
            className="p-1 rounded-lg hover:bg-gray-100 flex max-w-lg object-cover cursor-pointer"
            onClick={() => handleImageClick(path)}
          />
        ))}
      </div>

      {enlargedImagePath && (
        <div className="enlarged-image-container" onClick={closeEnlarged}>
          <img
            src={enlargedImagePath}
            alt="Enlarged Image"
            className="enlarged-image"
          />
        </div>
      )}
    </>
  );
};

export default PictureFrame;