import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './pages/home/providers/AuthProviders'

import {

  RouterProvider,
} from "react-router-dom";
import router from './routes/routes';





createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
 
  </StrictMode>,
  </div>
)
