import ActionButton from "./action"
import Title from "./title"

const NavBar = () => {
    return (
        <div id="navbar" className="fixed top-0 left-0 h-16 w-screen m-0 flex flex-col bg-black text-white shadow-lg">
                <Title/>
        </div>
    )
}

export default NavBar