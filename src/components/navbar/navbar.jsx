import Title from "./title";
import ActionButton from "./ActionButton";

const NavBar = () => {
  return (
    <>
      <div
        id="navbar"
        className="h-16 w-full fixed top-0 flex align-middle justify-center bg-black text-white shadow-lg"
      >
        <Title />
        <ActionButton />
      </div>
    </>
  );
};

export default NavBar;
