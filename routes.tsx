import { createHashRouter } from "react-router-dom";

import { NotFound } from './src/pages/app/404';
import { Home } from './src/pages/app/Home';
import { AppLayout } from './src/pages/layout/app'
import { Jurisdicionados } from '@/pages/app/Jurisdicionados';
import { AcordoMunicipios } from '@/pages/app/AcordoMunicipios';
import { AcordoEstado } from '@/pages/app/AcordoEstado';
import { Saneamento } from '@/pages/app/Saneamento';
import { IndicadoresSaneamento } from '@/pages/app/IndicadoresSaneamento';
import { CamarasEmFoco } from '@/pages/app/CamarasFoco';
import { PanoramaMunicipalDespesas } from '@/pages/app/PanoramaMunicipal';
import { AcompanhamentoProdutividade } from '@/pages/app/AcompanhamentoProdutividade';



export const Router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },     
      { path: '/jurisdicionados', element: <Jurisdicionados /> },     
      { path: '/acordomunicipios', element: <AcordoMunicipios /> },     
      { path: '/acordoestado', element: <AcordoEstado /> },     
      { path: '/saneamento', element: <Saneamento /> },     
      { path: '/indicadores', element: <IndicadoresSaneamento /> },     
      { path: '/acompanhamentodeprodutividade', element: <AcompanhamentoProdutividade /> },     
      { path: '/camarasemfoco', element: <CamarasEmFoco /> },     
      { path: '/panoramamunicipal', element: <PanoramaMunicipalDespesas /> },     
      
      
    ]
  },
  
  
]);
