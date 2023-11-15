import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/root"
import ErrorPage from './error-page.jsx'

function Main() {
const router = createBrowserRouter([{
  path: "/", element: <Root />,
  errorElement: <ErrorPage />
}])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default Main