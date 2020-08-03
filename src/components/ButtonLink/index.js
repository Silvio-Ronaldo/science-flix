import React from 'react';

import { StyledLink } from './styles';

function ButtonLink(props) {
    return (
        <StyledLink>
            {props.children}
        </StyledLink>
    );
}

export default ButtonLink;