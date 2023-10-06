const PictureFrame = ({ filePaths }) => {
  return (
    <div className="image-list flex grow justify-center flex-wrap flex-row space-x-2">
      {filePaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Image ${index}`}
          className="p-1 rounded-lg hover:bg-gray-100 flex max-w-lg object-cover"
        />
      ))}
    </div>
  );
};

export default PictureFrame;
