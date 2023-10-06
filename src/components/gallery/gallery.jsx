import PictureFrame from "./frame/picture";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-3 place-content-start">
        <PictureFrame filePaths={getFileUrls()} />
      </div>
    </>
  );
};

function getFileUrls() {
  const urls = [];
  for (let index = 1; index <= 10; index++) {
    // Use URL so Vite can bundle images: https://vitejs.dev/guide/assets.html
    urls.push(new URL(`../../static/img/${index}.jpg`, import.meta.url).href);
  }

  return urls;
}

export default Gallery;
