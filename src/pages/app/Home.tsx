import { Helmet } from "react-helmet-async";
import imgMaps from "@/assets/maps.png";
import imgAcordo from "@/assets/acordo.png";
import imgSaneamento from "@/assets/saneamento.png";
import imgIndicadores from "@/assets/indicadores.png";
import imgEngenharia from "@/assets/engenharia.png";
import imgCamara from "@/assets/camara.png";
import imgDespesa from "@/assets/despesa.png";
import { Link } from "react-router-dom";

export function Home() {
    const flashcards = [
        {
            title: "JURISDICIONADOS",
            description: "Levantamento das pessoas jurídicas subordinadas à jurisdição do TCE-PA",
            image: imgMaps,
            route: "/jurisdicionados",
        },
        {
            title: "ACORDO DE REPARAÇÃO - MUNICÍPIOS",
            description:
                "Acompanhamento das receitas e despesas municipais oriundas do acordo de reparação dos danos em Brumadinho",
            image: imgAcordo,
            route: "/acordomunicipios",
        },
        {
            title: "ACORDO DE REPARAÇÃO - ESTADO",
            description:
                "Acompanhamento das receitas e despesas estaduais oriundas do acordo de reparação dos danos em Brumadinho",
            image: imgAcordo,
            route: "/acordoestado",
        },
        {
            title: "INFORMAÇÕES DE SANEAMENTO",
            description: "Informações de Saneamento Básico disponibilizadas no Sistema Nacional de Informações sobre Saneamento - SNIS",
            image: imgSaneamento,
            route: "/saneamento",
        },
        {
            title: "INDICADORES DE SANEAMENTO",
            description: "Indicadores de Saneamento Básico disponibilizadas no Sistema Nacional de informações sobre Saneamento - SNIS",
            image: imgIndicadores,
            route: "/indicadores",
        },
        {
            title: "AGREGADOR DE TABELAS DE CUSTOS DE ENGENHARIA",
            description:
                "Dados das tabelas de custos de insumos e composições de serviços de obras e serviços de engenharia",
            image: imgEngenharia,
            route: "/custosdeengenharia",
        },
        {
            title: "CÂMARAS EM FOCO",
            description: "Panorama financeiro das câmaras municipais paraenses",
            image: imgCamara,
            route: "/camarasemfoco",
        },
        {
            title: "PANORAMA MUNICIPAL - DESPESAS",
            description:
                "Panorama das despesas dos municípios paraenses",
            image: imgDespesa,
            route: "/panoramamunicipal"
        },
    ];

    return (
        <>
            <Helmet title="Home" />
            <div className="p-6 min-h-screen">
                <h1 className="text-3xl text-sky-800 font-bold mb-8 text-center">
                    Bem-vindo ao Portal de Análise de Dados Arara-Azul!
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {flashcards.map((card, index) => (
                        <div
                            key={index}
                            className="group perspective-1000 relative w-full h-64 rounded-3xl shadow-md overflow-hidden"
                        >
                            {/* Container 3D */}
                            <div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
                                {/* Frente do Card */}
                                <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center text-center shadow-lg backface-hidden p-6">
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

                                {/* Verso do Card */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center text-center rotate-y-180 backface-hidden p-6 text-white">
                                    <Link
                                        to={card.route || "/"}
                                        className="text-lg font-semibold underline hover:text-blue-300"
                                    >
                                        <h1 className="text-lg font-semibold">{card.title}</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
