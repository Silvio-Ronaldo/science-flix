import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Image } from './styles';

import Logo from '../../assets/logoScienceFlixGreen.png';

function Header() {
    return (
        <Container>
            <Link to="/" >
                <Image src={Logo} alt="ScienceFlix logo" />
            </Link>
        </Container>
    );
}

export default Header;