import PictureFrame from "./frame/picture";

const Gallery = () => {
  const filePaths = [
    "./src/static/img/1.jpg",
    "./src/static/img/2.jpg",
    "./src/static/img/3.jpg",
    "./src/static/img/4.jpg",
    "./src/static/img/5.jpg",
    "./src/static/img/6.jpg",
    "./src/static/img/7.jpg",
    "./src/static/img/8.jpg",
    "./src/static/img/5.jpg",
  ];

  return (
    <>
      <div className="grid grid-cols-3 place-content-start">
        <PictureFrame filePaths={filePaths} />
      </div>
    </>
  );
};

export default Gallery;
