import { Helmet } from "react-helmet-async";

export function Home() {
  const flashcards = [
    {
      title: "JURISDICIONADOS",
      description: "Informações relacionadas aos jurisdicionados do estado.",
      image: "/images/jurisdicionados.png",
    },
    {
      title: "ACORDO DE REPARAÇÃO - MUNICÍPIOS",
      description:
        "Acompanhamento das receitas e despesas municipais oriundas do acordo de reparação dos danos em Brumadinho.",
      image: "/images/acordo-municipios.png",
    },
    {
      title: "ACORDO DE REPARAÇÃO - ESTADO",
      description:
        "Detalhes sobre o uso de recursos oriundos do acordo de reparação estadual.",
      image: "/images/acordo-estado.png",
    },
    {
      title: "INFORMAÇÕES DE SANEAMENTO",
      description: "Dados e indicadores de saneamento em todo o estado.",
      image: "/images/saneamento.png",
    },
    {
      title: "INDICADORES DE SANEAMENTO",
      description:
        "Indicadores-chave para avaliação da qualidade do saneamento básico.",
      image: "/images/indicadores-saneamento.png",
    },
    {
      title: "AGREGADOR DE TABELAS DE CUSTOS DE ENGENHARIA",
      description:
        "Ferramenta para consolidar tabelas de custos em projetos de engenharia.",
      image: "/images/custos-engenharia.png",
    },
    {
      title: "CÂMARAS EM FOCO",
      description: "Destaques e notícias sobre as câmaras municipais.",
      image: "/images/camaras.png",
    },
    {
      title: "PANORAMA MUNICIPAL - DESPESAS",
      description:
        "Visão geral das despesas públicas municipais em diversas áreas.",
      image: "/images/despesas.png",
    },
  ];

  return (
    <>
      <Helmet title="Home" />
      <div className="p-6 bg-gray-50 min-h-screen">
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
                  <h2 className="text-lg font-semibold mb-2">Detalhes Extras</h2>
                  <p className="text-sm">
                    Clique aqui para saber mais sobre {card.title}.
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
