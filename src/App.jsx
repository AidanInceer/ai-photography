import "./App.css";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <table className="w-90 left-0">
        <tr>
          <td>
            <img
              src="./src/static/img/1.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/2.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/3.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="./src/static/img/4.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/5.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/6.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="./src/static/img/7.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/8.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
          <td>
            <img
              src="./src/static/img/4.jpg"
              className="p-1 shadow-lg rounded-lg hover:bg-gray-100"
            ></img>
          </td>
        </tr>
      </table>
    </>
  );
}

export default App;
