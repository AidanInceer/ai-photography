import "./App.css";
import NavBar from "./components/navbar/navbar";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-10 p-10">
        <Gallery />
      </div>
    </>
  );
}

export default App;
