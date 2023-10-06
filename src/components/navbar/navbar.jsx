import Title from "./title";
import ActionButton from "./ActionButton";

const NavBar = () => {
  return (
    <>
      <div id="navbar" className="h-16 w-full grid grid-cols-3 bg-black text-white shadow-lg">
        <div></div>
        <Title />
        <ActionButton />
      </div>
    </>
  );
};

export default NavBar;
