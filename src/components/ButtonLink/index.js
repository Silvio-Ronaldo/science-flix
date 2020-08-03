import React from 'react';

import { Link } from './styles';

function ButtonLink(props) {
    return (
        <Link href={props.href}>
            {props.children}
        </Link>
    );
}

export default ButtonLink;