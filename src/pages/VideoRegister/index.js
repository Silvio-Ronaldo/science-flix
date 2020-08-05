import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MainTitle, Form, Button, StyledLink } from './styles';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import createNewVideo from '../../repositories/videos';

function CadastroVideo() {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [category, setCategory] = useState('');
    const [videos, setVideos] = useState([])

    const history = useHistory();

    function handleTitle(title) {
        setVideoTitle(title);
    }

    function handleUrl(url) {
        setVideoUrl(url);
    }

    function handleCategory(category) {
        setCategory(category);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const videoValues = {
            categoryId: 1,
            title: videoTitle,
            url: videoUrl
        }

        setVideos([
            videoValues
        ]);

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
                />

                <FormField 
                    label="Link do vídeo: "
                    type="text"
                    placeholder="Digite o link do vídeo"
                    name="url"
                    value={videoUrl}
                    onChange={(event) => handleUrl(event.target.value)}
                    as="input"
                />

                <FormField 
                    label="Categoria do vídeo: "
                    type="text"
                    placeholder="Digite a categoria do vídeo"
                    name="category"
                    value={category}
                    onChange={(event) => handleCategory(event.target.value)}
                    as="input"
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