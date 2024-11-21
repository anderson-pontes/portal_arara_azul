import { Helmet } from 'react-helmet-async';

export function Home() {

  return (
    <>
    <Helmet title="Home"/>
    <div>        
        <h1 className='text-2xl text-slate-800 font-bold'>Bem-vindo ao portal Arara-Azul!</h1>
    </div>

    </>
  )
}
