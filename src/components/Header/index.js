import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Image } from './styles';

import ButtonLink from '../ButtonLink';

import Logo from '../../assets/logoScienceFlixGreen.png';

function Header() {
    return (
        <Container>
            <Link to="/" >
                <Image src={Logo} alt="ScienceFlix logo" />
            </Link>

            <Link to="/cadastro/video">
                <ButtonLink>
                    Novo vídeo
                </ButtonLink>
            </Link>
        </Container>
    );
}

export default Header;