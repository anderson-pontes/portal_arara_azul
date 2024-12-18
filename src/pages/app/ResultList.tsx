import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '@/Context/SearchContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AiFillFilePdf } from 'react-icons/ai';
import { api } from '@/lib/axios';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import GridLoader from 'react-spinners/GridLoader';
import { SearchX } from 'lucide-react';

interface AtosData {
    ano_sessao_plenaria: string;
    arquivo_extensao: string;
    arquivo_quantidade_paginas: string;
    caminhoPdf: string;
    classes_subclasses: string;
    conteudo: string;
    data_conteudo: string;
    data_publicacao_doe: string;
    data_sessao_plenaria: string;
    ementa: string;
    exercicios: string;
    id_base_dados: string;
    interessados: string;
    link_download: string;
    numero: string;
    relator: string;
    titulo: string;
    unidades_jurisdicionadas: string;
}

const ResultsList: React.FC = () => {
    const { query } = useContext(SearchContext)!;
    const [data, setData] = useState<AtosData[]>([]);
    const [error, setError] = useState<JSX.Element | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(25);

    useEffect(() => {
        if (query && Object.values(query).some((value) => value)) {
            fetchResults(page);
        } else {
            setError(
                <div className='text-xl items-center flex flex-col font-semibold text-justify mt-8 text-muted-foreground'>
                    <p>Favor informe o conteúdo a ser pesquisado.</p>
                    <SearchX className="h-12 w-12 mt-4" />
                </div>
            );
            setData([]);
        }
    }, [query, page]);

    const fetchResults = async (pagina: number) => {
        setLoading(true);
        setError(null);

        try {
            const queryString = new URLSearchParams({
                data_sessao_plenaria: query.data_sessao_plenaria || '',
                data_publicacao_doe: query.data_publicacao_doe || '',
                exercicios: query.exercicios || '',
                classes_subclasses: query.classes_subclasses || '',
                interessados: query.interessados || '',
                unidades_jurisdicionadas: query.unidades_jurisdicionadas || '',
                relator: query.relator || '',
                busca_exata: query.busca_exata || '',
                busca_termos: query.busca_termos || '',
                titulo: query.titulo || '',
                page: pagina.toString(),
                limit: limit.toString(),
            }).toString();

            const response = await api.get(`/consulta?${queryString}`);

            if (!response.data || !Array.isArray(response.data)) {
                throw new Error('Resposta inválida da API.');
            }

            setData(response.data); // API retorna a lista diretamente
        } catch (err) {
            setError(
                <div className='text-xl items-center flex flex-col font-semibold text-justify mt-8 text-muted-foreground'>
                    <p>Erro ao buscar dados. Tente novamente mais tarde.</p>
                    <SearchX className="h-12 w-12 mt-4" />
                </div>
            );
            console.error('Erro ao buscar dados:', err);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1) {
            setPage(newPage);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <GridLoader size={16} color="#5359E9" />
            </div>
        );
    }

    if (error) return <div>{error}</div>;

    if (!data || data.length === 0) return (
        <div className='text-xl items-center flex flex-col font-semibold text-justify mt-8 text-muted-foreground'>
            <p>Não foi encontrado nenhum diário para o(s) filtro(s) selecionado(s).</p>
            <p>Tente novamente com outros parâmetros.</p>
            <SearchX className="h-12 w-12 mt-4" />
        </div>
    );

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold tracking-tight text-justify mt-4 text-blue-800/80'>Resultados para a busca:</h2>
            {data.map((item, index) => (
                <Card key={index} className='shadow-md shadow-blue-500/40'>
                    <CardHeader className="flex-items-center flex-row justify-between space-y-0 pb-4">
                        <div className="space-y-1">
                            <CardTitle className="text-base font-medium text-blue-700 dark:text-blue-300">
                                {item.titulo}
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">{item.ementa}</p>
                    </CardContent>
                    <CardFooter className="flex justify-start gap-2">
                        <a
                            href={item.link_download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-start gap-2 items-center leading-7 text-blue-600 hover:underline"
                        >
                            <AiFillFilePdf className="text-red-600" />
                            Abrir documento
                        </a>
                    </CardFooter>
                </Card>
            ))}

            <Pagination className="bottom-0 dark:bg-transparent py-2 cursor-pointer">
                <PaginationContent>
                    {page > 1 && (
                        <PaginationPrevious size="sm" onClick={() => handlePageChange(page - 1)}>
                            Anterior
                        </PaginationPrevious>
                    )}
                    <PaginationItem>
                        <PaginationLink>{page}</PaginationLink>
                    </PaginationItem>
                    <PaginationNext size="sm" onClick={() => handlePageChange(page + 1)}>
                        Próxima
                    </PaginationNext>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default ResultsList;
