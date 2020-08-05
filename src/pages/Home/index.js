import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import getCategoriesWithVideos from '../../repositories/categories';

function Home() {
    const [InitialsData, setInitialsData] = useState([]);

    useEffect(() => {
        async function getAll() {
            const categoriesWithVideos = await getCategoriesWithVideos();

            setInitialsData(categoriesWithVideos);
        }
        
        getAll();
    }, []);

    return (
        <>
            <Header />

            {InitialsData.map((category, index) => {
                if(index === 0) {
                    return (
                        <>
                            <BannerMain  
                                videoTitle={category.videos[0].title}
                                url={category.videos[0].url}
                                videoDescription={'Buracos de minhoca são reais ou estão apenas magicamente disfarçados na física e na matemática? E, se eles forem reais, como funcionam e onde podemos achá-los?'}
                            />
                            <Carousel 
                                ignoreFirstVideo
                                category={category}
                            />
                        </>
                    );
                }

                return (
                    <Carousel 
                        key={category.id}
                        category={category}
                    />
                );
            })}

            <Footer />
        </>
    );
}

export default Home;