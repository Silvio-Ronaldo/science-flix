import styled from 'styled-components';

export const StyledLink = styled.button`
    color:  var(--white);
    background-color: var(--black);
    border: solid 1px var(--secondary);
    box-sizing: border-box;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    :hover, :focus {
        opacity: .5;
        cursor: pointer;
    }

    @media(max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--primary);
        border-radius: 0;
        text-align: center;
        border: none;
    }
`;