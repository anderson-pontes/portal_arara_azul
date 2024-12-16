import React, { useContext, useState } from 'react';
import { SearchContext } from '@/Context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@/pages/app/Date';

const SearchFilter: React.FC = () => {
    const { query, setQuery } = useContext(SearchContext)!;
    const [localQuery, setLocalQuery] = useState({
        trecho: query.trecho || '',
        nome_arquivo: query.nome_arquivo || '',
        link_arquivo: query.link_arquivo || '',
        termo: query.termo || '',
        ano: query.ano || '',
        data_inicio: query.data_inicio || '',
        data_fim: query.data_fim || '',
    });

    const { control, setValue } = useForm(); // Adiciona setValue do useForm
    const navigate = useNavigate();

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        setQuery(localQuery);
        navigate('/pesquisaintegrada/results');
    };

    const handleClearFilters = () => {
        // Reseta o estado local para os valores iniciais
        const initialValues = {
            trecho: '',
            nome_arquivo: '',
            link_arquivo: '',
            termo: '',
            ano: '',
            data_inicio: '',
            data_fim: '',
        };
        setLocalQuery(initialValues);

        
        setQuery(initialValues);

        
        setValue('data_inicio', ''); 
        setValue('data_fim', '');    
    };

    return (
        <form className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
            <span className="text-lg font-semibold text-blue-800/80">Pesquisar:</span>
            <Input
                placeholder="Informe o conteúdo a ser buscado"
                value={localQuery.termo}
                onChange={(e) => setLocalQuery({ ...localQuery, termo: e.target.value })}
                className="w-full sm:w-[500px]"
            />
            <Input
                placeholder="Ano"
                value={localQuery.ano}
                onChange={(e) => setLocalQuery({ ...localQuery, ano: e.target.value })}
                className="w-full sm:w-auto"
            />
            <Controller
                name="data_inicio"
                control={control}
                render={({ field }) => (
                    <DatePicker date={field.value} onChange={(date) => field.onChange(date)} />
                )}
            />
            <Controller
                name="data_fim"
                control={control}
                render={({ field }) => (
                    <DatePicker date={field.value} onChange={(date) => field.onChange(date)} />
                )}
            />
            <Button onClick={handleSearch} type="submit" size="default" className='bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg text-white hover:text-blue-300'>
                <Search className="h-4 w-4 mr-2" />
                Pesquisar
            </Button>
            <Button onClick={handleClearFilters} variant="outline" size="default" className="w-full sm:w-auto">
                <X className="h-4 w-4 mr-2" />
                Remover filtros
            </Button>
        </form>
    );
};

export default SearchFilter;
