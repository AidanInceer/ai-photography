import Title from "./title";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav
      id="navbar"
      className="
        h-20 w-full fixed top-0 z-40
        flex items-center justify-between
        px-8 md:px-16 lg:px-24
        bg-[var(--bg-primary)]/80 backdrop-blur-xl
        border-b border-[var(--border)]
        transition-colors duration-300
      "
    >
      <Title />
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
