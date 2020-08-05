import React, { useState, useEffect } from 'react';

import { MainTitle, Form, Button, CategoryList, StyledLink } from './styles';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import api from '../../services/api';

function CategoryRegister() {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categoryColor, setCategoryColor] = useState('');

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories([
                ...data
            ])
            console.log(categories);
        }

        loadCategories();
    }, []);

    function handleName(name) {
        setCategoryName(name);
    }

    function handleDescription(description) {
        setCategoryDescription(description);
    }

    function handleColor(color) {
        setCategoryColor(color);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const categoryValues = {
            name: categoryName,
            description: categoryDescription,
            color: categoryColor,
        }

        setCategories([
            ...categories,
            categoryValues
        ])

        setCategoryName('');
        setCategoryDescription('');
        setCategoryColor('');
    }

    return (
        <PageDefault>
            <MainTitle>Cadastro de Categoria: </MainTitle>

            <Form onSubmit={(event) => handleSubmit(event)}>
                <FormField 
                    label="Nome da Categoria: "
                    type="text"
                    placeholder="Digite o nome da categoria"
                    name="name"
                    value={categoryName}
                    onChange={(event) => handleName(event.target.value)}
                    as="input"
                />

                <FormField 
                    label="Descrição da Categoria: "
                    type="textarea"
                    placeholder="Digite uma breve descrição da categoria"
                    name="description"
                    value={categoryDescription}
                    onChange={(event) => handleDescription(event.target.value)}
                    as="textarea"
                />

                <FormField 
                    label="Cor da Categoria: "
                    type="color"
                    placeholder=""
                    name="color"
                    value={categoryColor}
                    onChange={(event) => handleColor(event.target.value)}
                    as="input"
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </Form>

            <StyledLink to="/">
                Ir para a Home
            </StyledLink>
        </PageDefault>
    );
}

export default CategoryRegister;