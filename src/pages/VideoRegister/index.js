import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MainTitle, Form, Button, StyledLink } from './styles';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import createNewVideo from '../../repositories/videos';
import { getOnlyCategories } from '../../repositories/categories';

function CadastroVideo() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoCategory, setVideoCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const categoryTitles = categories.map(({ name }) => name);

    const history = useHistory();

    useEffect(() => {
        async function getAll() {
            const data = await getOnlyCategories();

            setCategories(data);
        }

        getAll();
    }, [])    

    function handleTitle(title) {
        setVideoTitle(title);
    }

    function handleUrl(url) {
        setVideoUrl(url);
    }

    function handleCategory(category) {
        setVideoCategory(category);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const chooseCategory = categories.find((category) => {
            return category.name === videoCategory;
        });

        const videoValues = {
            categoryId: chooseCategory.id,
            title: videoTitle,
            url: videoUrl
        }

        await createNewVideo(videoValues);

        history.push('/')
    }

    return (
        <PageDefault>
            <MainTitle>Cadastro de Vídeo: </MainTitle>

            <Form onSubmit={(event) => handleSubmit(event)}>
                <FormField 
                    label="Nome do Vídeo: "
                    type="text"
                    placeholder="Digite o nome do vídeo"
                    name="title"
                    value={videoTitle}
                    onChange={(event) => handleTitle(event.target.value)}
                    as="input"
                    suggestions={[]}
                />

                <FormField 
                    label="Link do vídeo: "
                    type="text"
                    placeholder="Digite o link do vídeo"
                    name="url"
                    value={videoUrl}
                    onChange={(event) => handleUrl(event.target.value)}
                    as="input"
                    suggestions={[]}
                />

                <FormField 
                    label="Categoria do vídeo: "
                    type="text"
                    placeholder="Digite a categoria do vídeo"
                    name="category"
                    value={videoCategory}
                    onChange={(event) => handleCategory(event.target.value)}
                    as="input"
                    suggestions={categoryTitles}
                />


                <Button type="submit">
                    Cadastrar
                </Button>
            </Form>

            <StyledLink to="/">
                Cadastrar Categoria
            </StyledLink>
        </PageDefault>
    );
}

export default CadastroVideo;