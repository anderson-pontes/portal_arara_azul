import { Helmet } from 'react-helmet-async';

export function CamarasEmFoco() {
    return (
        <>
            <Helmet title="Câmaras em Foco" />
            <div className='h-screen flex flex-col'>
                
                <div className="mt-6 flex flex-1">

                     <iframe
                        className='rounded-md'
                        title="AB_Camaras"
                        width="100%"
                        height="100%"
                        src="https://app.powerbi.com/view?r=eyJrIjoiMWRkNGQ4YjYtM2FmMi00MTVmLTlkMjYtODJjYWZhNDM3YmUzIiwidCI6IjA2YjQ3Y2UyLWZmN2UtNDRjOS05M2ExLTEwZDVhYTE4M2RlNCJ9"
                        allowFullScreen={true}
                        style={{ border: 'none' }}

                    >
                    </iframe>


                </div> 
                
               
            </div>
        </>
    );
}
