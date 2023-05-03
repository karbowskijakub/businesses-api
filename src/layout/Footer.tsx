import React from "react";
import styled from "styled-components";
const Footer = () => {
    return (
        <Container>
            <p> Jakub Karbowski &copy; 2023</p>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    width: 100%;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    background: ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`;
