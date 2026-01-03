import "./App.css";
import NavBar from "./components/navbar/navbar";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <NavBar />
      {/* Main content with generous spacing */}
      <main className="pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <Gallery />
      </main>

      {/* Minimal footer */}
      <footer className="
        py-12 px-8 md:px-16 lg:px-24
        text-center text-xs tracking-wide
        text-[var(--text-muted)]
        transition-colors duration-300
      ">
        <p>© 2026 AI Photography</p>
      </footer>
    </div>
  );
}

export default App;
