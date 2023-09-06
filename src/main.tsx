import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddBook from './Pages/AddBook.tsx'
import Home from './Pages/Home.tsx'
import App from './App.tsx'
import ErrPages from './Pages/ErrPages.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: ([
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrPages/>
      },
      {
        path: "/addbook",
        element: <AddBook/>,
        errorElement: <ErrPages/>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
