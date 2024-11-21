import '@/index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from '../routes'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

export function App() {
  

  return (

    <HelmetProvider>
      
        <Helmet titleTemplate= "%s | Portal Arara-Azul" />
        <Toaster richColors />
        <RouterProvider router={ Router } />

    
    </HelmetProvider>   

      
    
  )
}
