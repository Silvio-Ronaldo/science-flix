import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainTitle = styled.h1`
    margin: 0 0 10px 0;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    align-self: center;
    margin: 25px 0 10px 0;
    background-color: var(--black);
    color: var(--white);
    font-weight: bold;
    border-radius: 5px;
    font-size: 15px;
    border: solid 1px var(--secondary);
    transition: opacity .3s;

    :hover, :focus {
        opacity: .5;
        cursor: pointer;
    }
`;

export const CategoryList = styled.ul`

`;

export const StyledLink = styled(Link)`
    color: var(--primary);
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: opacity .3s;

    :hover, :focus {
        opacity: .5;
    }
`;