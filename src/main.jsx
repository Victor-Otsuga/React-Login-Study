import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx'
import Main from './routes/MainPage.jsx'

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    

    children: [
      {path: '/', element: <App />},
      {path: '/dash', element: <Main />},
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
