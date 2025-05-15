import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-red-300 selection:text-red-900">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="relative h-full w-full bg-neutral-900"><div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
    </div>
    
    <div className="container mx-auto px-8">
      <Navbar></Navbar>
      <Body></Body>
    </div>

    
  </div>
  )
}

export default App