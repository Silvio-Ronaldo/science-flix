import React from 'react';

import { Container, Link, Image } from './styles';

import ButtonLink from '../ButtonLink';

import Logo from '../../assets/logoScienceFlixGreen.png';

function Header() {
    return (
        <Container>
            <Link href="/" >
                <Image src={Logo} alt="ScienceFlix logo" />
            </Link>

            <ButtonLink href="/" >
                Novo vídeo
            </ButtonLink>
        </Container>
    );
}

export default Header;