import { createHashRouter } from "react-router-dom";

import { NotFound } from './src/pages/app/404';
import { Home } from './src/pages/app/Home';
import { AppLayout } from './src/pages/layout/app'
import { Jurisdicionados } from '@/pages/app/Jurisdicionados';



export const Router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },     
      { path: '/jurisdicionados', element: <Jurisdicionados /> },     
      
      
    ]
  },
  
  
]);
