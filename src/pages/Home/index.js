import React from 'react';

import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
    return (
        <>
            <Header />

            <BannerMain  
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"O que é Front-end? Aprenda tudo agora!"}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[1]}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[2]}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[3]}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[4]}
            />

            <Carousel 
                ignoreFirstVideo
                category={dadosIniciais.categorias[5]}
            />

            <Footer />
        </>
    );
}

export default Home;