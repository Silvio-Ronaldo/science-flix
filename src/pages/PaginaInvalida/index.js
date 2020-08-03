import React from 'react';

import { ErrorMessage } from './styles';

import PageDefault from '../../components/PageDefault';

function PaginaInvalida() {
    return (
        <>
            <PageDefault>
                <ErrorMessage>Erro! Essa página não existe. Tente outro endereço!</ErrorMessage>
            </PageDefault>
        </>
    );
}

export default PaginaInvalida;