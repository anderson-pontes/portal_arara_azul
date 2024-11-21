import { Helmet } from "react-helmet-async";
import imgMaps from '@/assets/maps.png';
import imgAcordo from '@/assets/acordo.png';
import imgSaneamento from '@/assets/saneamento.png';
import imgIndicadores from '@/assets/indicadores.png';
import imgEngenharia from '@/assets/engenharia.png';
import imgCamara from '@/assets/camara.png';
import imgDespesa from '@/assets/despesa.png';

export function Home() {
  const flashcards = [
    {
      title: "JURISDICIONADOS",
      description: "Levantamento das pessoas jurídicas subordinadas à jurisdição do TCE-PA",
      image: imgMaps,
    },
    {
      title: "ACORDO DE REPARAÇÃO - MUNICÍPIOS",
      description:
        "Acompanhamento das receitas e despesas municipais oriundas do acordo de reparação dos danos em Brumadinho",
      image: imgAcordo,
    },
    {
      title: "ACORDO DE REPARAÇÃO - ESTADO",
      description:
        "Acompanhamento das receitas e despesas estaduais oriundas do acordo de reparação dos danos em Brumadinho",
      image: imgAcordo,
    },
    {
      title: "INFORMAÇÕES DE SANEAMENTO",
      description: "Informações de Saneamento Básico disponibilizadas no Sistema Nacional de Informações sobre Saneamento - SNIS",
      image: imgSaneamento,
    },
    {
      title: "INDICADORES DE SANEAMENTO",
      description: "Indicadores de Saneamento Básico disponibilizadas no Sistema Nacional de informações sobre Saneamento - SNIS",
      image: imgIndicadores,
    },
    {
      title: "AGREGADOR DE TABELAS DE CUSTOS DE ENGENHARIA",
      description:
        "Dados das tabelas de custos de insumos e composições de serviços de obras e serviços de engenharia",
      image: imgEngenharia
    },
    {
      title: "CÂMARAS EM FOCO",
      description: "Panorama financeiro das câmaras municipais paraenses",
      image: imgCamara
    },
    {
      title: "PANORAMA MUNICIPAL - DESPESAS",
      description:
        "Panorama das despesas dos municípios paraenses",
      image: imgDespesa
    },
  ];

  return (
    <>
      <Helmet title="Home" />
      <div className="p-6 min-h-screen">
        <h1 className="text-3xl text-slate-800 font-bold mb-8 text-center">
          Bem-vindo ao portal Arara-Azul!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {flashcards.map((card, index) => (
            <div
              key={index}
              className="group perspective relative w-full h-64 rounded-lg shadow-md overflow-hidden transform transition-transform duration-700"
            >
              {/* Container 3D */}
              <div className="relative w-full h-full transform-style-3d group-hover:rotate-y-180">
                {/* Frente do Card (Imagem + Título + Parágrafo) */}
                <div className="absolute inset-0 bg-white rounded-lg flex flex-col items-center justify-center text-center shadow-lg backface-hidden p-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h2 className="text-lg font-semibold text-slate-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </div>

                {/* Verso do Card (Mensagem Oculta) */}
                <div className="absolute inset-0 bg-blue-600 rounded-lg flex items-center justify-center text-center rotate-y-180 backface-hidden p-6 text-white">
                  
                  <p className="text-base font-semibold">
                     {card.title}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
