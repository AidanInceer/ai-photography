import PictureFrame from "./frame/picture";

function getFileUrls() {
  const urls = [];
  for (let index = 1; index <= 8; index++) {
    // Use URL so Vite can bundle images: https://vitejs.dev/guide/assets.html
    urls.push(new URL(`../../static/img/${index}.jpg`, import.meta.url).href);
  }
  return urls;
}

const Gallery = () => {
  return (
    <>
      <div>
          <PictureFrame filePaths={getFileUrls()} />
      </div>
    </>
  );
};



export default Gallery;
