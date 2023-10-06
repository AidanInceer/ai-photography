import "./App.css";
import NavBar from "./components/navbar/Navbar";

import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <>
      <NavBar />
      <div className="p-10">
        <Gallery />
      </div>
    </>
  );
}

export default App;
