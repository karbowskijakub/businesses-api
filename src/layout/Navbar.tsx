import React from "react";
import styled from "styled-components";
import data from "../utils/nav-links";
import breakpoints from "../assets/breakpoints/breakpoints";

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <div>
                    {data.map((link) => {
                        const { id, icon, name, path } = link;
                        return (
                            <Link href={path} key={id}>
                                {name}
                                {icon}
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    background: ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`;
const Link = styled.a`
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media only screen and ${breakpoints.device.xs} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    @media only screen and ${breakpoints.device.xl} {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
