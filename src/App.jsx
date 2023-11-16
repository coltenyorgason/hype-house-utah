import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './routes/landingpage'

function App() {
const router = createBrowserRouter([{
  path: "/", element: <LandingPage />
}])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
