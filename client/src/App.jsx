import { useState } from 'react'
import RoutesPage from '../RoutesPage'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutesPage/>
    <ToastContainer />
    </>
  )
}

export default App
