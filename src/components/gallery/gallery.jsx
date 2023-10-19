import PictureFrame from "./frame/picture";

const Gallery = () => {
  return (
    <>
      <div>
        <PictureFrame filePaths={getFileUrls()} />
      </div>
    </>
  );
};

function getFileUrls() {
  const urls = [];
  for (let index = 1; index <= 9; index++) {
    // Use URL so Vite can bundle images: https://vitejs.dev/guide/assets.html
    urls.push(new URL(`../../static/img/${index}.jpg`, import.meta.url).href);
  }

  return urls;
}

export default Gallery;
