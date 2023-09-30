import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <NavBar/>
      </div>

      <table className='w-90 left-0'>
        <tr>
          <td><img src='./src/static/img/g.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/b.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/c.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
        </tr>
        <tr>
          <td><img src='./src/static/img/d.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/e.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/f.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
        </tr>
        <tr>
          <td><img src='./src/static/img/g.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/h.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
          <td><img src='./src/static/img/i.jpg' className='p-1 shadow-lg rounded-lg hover:border-2 hover:border-grey-700/20'></img></td>
        </tr>
      </table>
      
    </>
  )
}

export default App
