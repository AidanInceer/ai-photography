import Title from "./Title";
import ActionButton from "./ActionButton";

const NavBar = () => {
  return (
    <>
      <div
        id="navbar"
        className="
            fixed top-0 left-0 w-screen h-16
            grid grid-cols-3
          bg-black text-white shadow-lg"
      >
        <div></div>
        <Title />
        <ActionButton />
      </div>
    </>
  );
};

export default NavBar;
