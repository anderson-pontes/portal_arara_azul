import { Helmet } from 'react-helmet-async';

export function CamarasEmFoco() {
    return (
        <>
            <Helmet title="Câmaras em Foco" />
            <div className='h-screen flex flex-col'>
                <h1 className="text-3xl text-sky-800 font-bold mb-8 text-center">CÂMARAS EM FOCO</h1>
                {/* <div className="mt-6 flex flex-1">

                     <iframe
                        className='rounded-md'
                        title="Consulta Devedor - CNPJ"
                        width="100%"
                        height="100%"
                        src="https://app.powerbi.com/view?r=eyJrIjoiOWVlNjIzMjEtNDExYS00YTYxLTllNDEtMDdlM2VhNjhlY2IxIiwidCI6ImIwYmUwNjYzLTkxNWUtNDczZS1hNTU2LWExNmVmOWRmZTQxNCJ9"
                        allowFullScreen={true}
                        style={{ border: 'none' }}

                    >
                    </iframe>


                </div> */}
                
               
            </div>
        </>
    );
}
