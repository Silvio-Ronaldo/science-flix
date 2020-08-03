import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--black);
    height: 80px;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: solid 3px var(--primary);

    @media(max-width: 800px) {
        justify-content: center;
        height: 40px;
    }
`;

export const Link = styled.a`
    cursor: pointer;
`;

export const Image = styled.img`
    height: 60px;

    @media(max-width: 800px) {
        height: 20px;
    }
`;

