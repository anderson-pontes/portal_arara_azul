import { Helmet } from 'react-helmet-async';

export function PanoramaMunicipalDespesas() {
    return (
        <>
            <Helmet title="Panorama Municipal - Despesas" />
            <div className='h-screen flex flex-col'>
                
                <div className="mt-6 flex flex-1 bg-blue-100">

                     <iframe
                        className='rounded-2xl w-full h-full'
                        title="AB_Despesas"
                        width="100%"
                        height="100%"
                        src="https://app.powerbi.com/view?r=eyJrIjoiM2E5OTZlNjAtYTAzMS00ZDhkLTk0NzYtYzk3M2U1MDNjNTE5IiwidCI6ImIwYmUwNjYzLTkxNWUtNDczZS1hNTU2LWExNmVmOWRmZTQxNCJ9"
                        allowFullScreen={true}
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent', // Herda a cor de fundo do pai
                        }}

                    >
                    </iframe>


                </div> 
                
               
            </div>
        </>
    );
}