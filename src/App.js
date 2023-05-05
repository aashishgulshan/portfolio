import React from 'react'
import Footer from './Pages/Footer';
import Error from './Pages/Error';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Error/>
      <Footer/>

    </div>
  )
}

export default App